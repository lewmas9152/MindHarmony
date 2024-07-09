const dotenv = require('dotenv');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const {User , Group , Chat , Message} = require('./db/schema.js');
const auth = require('./auth.js');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
});

const db = mongoose.connection;
const port = process.env.PORT || 3001;

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Connected to database');
});

const app = express();
const server = http.createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});

corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'Hello User! This is an api :)' });
});

app.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('groups').populate('chats');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/me', auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user._id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/users/:id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.put('/me', auth, async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/groups', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('groups');
        res.json(user.groups);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/groups', auth, async (req, res) => {
    try {
        const group = new Group({
            name: req.body.name,
            members: [req.user._id],
            admins: [req.user._id]
        });
        await group.save();
        const user = await User.findById(req.user._id);
        user.groups.push(group._id);
        await user.save();
        res.json(group);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/groups/:id', auth, async (req, res) => {
    try {
        const group = await Group.findById(req.params.id).populate('members').populate('chat');
        res.json(group);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/groups/:id', auth, async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if (!group.admins.includes(req.user._id)) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        await group.delete();
        res.json({ message: 'Group Deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/groups/:id/message', auth, async (req, res) => {
    try {
        const chat = new Chat({ group: req.params.id });
        await chat.save();
        const group = await Group.findById(req.params.id);
        group.chats.push(chat._id);
        await group.save();
        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/chats/:id/messages', auth, async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const chat = await Chat.findById(req.params.id)
            .populate({
                path: 'messages',
                options: {
                    sort: { date: -1 },
                    skip: (page - 1) * limit,
                    limit: parseInt(limit)
                }
            });
        res.json(chat.messages);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

io.use((socket, next) => {
    let token = socket.handshake.auth.token;
    if (!token) return next(new Error("Unauthorized"));
    axios.get(`${process.env.AUTH_URL}/user/user-details`, {
        headers: {
            Authorization: `Token ${token}`
        }
    }).then((response)=>{
        User.findById(response.data.user.id).then((err , user)=>{
            if (err) return next(new Error("Unauthorized"));
            if(user == null){
                user = new User({
                    id: response.data.user.id,
                    username: response.data.user.username,
                    profileImage: response.data.profile_picture,
                    lastOnline: Date.now(),
                    groups: [],
                    chats: []
                });
            }
            socket.user = user;
            next();
        });
    }).catch((err)=>{return next(new Error("Unauthorized"))});
});

io.on('connection', (socket) => {
    socket.user.online = true;
    socket.user.socketId = socket.id;
    socket.user.save();

    socket.emit('user', socket.user);

    socket.on('disconnect', async () => {
        const user = await User.findById(socket.user._id);
        user.online = false;
        user.socketId = null;
        user.lastOnline = Date.now();
        await user.save();
    });

    socket.on('typing', (chatId) => {
        socket.to(chatId).emit('typing', socket.user.username);
    });

    socket.on('stopTyping', (chatId) => {
        socket.to(chatId).emit('stopTyping', socket.user.username);
    });

    socket.on('message', async (msg) => {
        try {
            const chat = await Chat.findById(msg.chat);
            if (!chat || !chat.participants.includes(socket.user._id)) return;
            const message = new Message({
                message: msg.message,
                sender: socket.user._id,
                chat: msg.chat,
                date: Date.now()
            });
            await message.save();
            chat.messages.push(message._id);
            await chat.save();
            io.to(msg.chat).emit('message', message);
        } catch (error) {
            console.error(error);
        }
    });

    socket.on('join', (chatId) => {
        Chat.findById(chatId).then((chat) => {
            if (!chat || !chat.participants.includes(socket.user._id)) return;
            socket.join(chatId);
        });
    });

    socket.on('leave', (chatId) => {
        socket.leave(chatId);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
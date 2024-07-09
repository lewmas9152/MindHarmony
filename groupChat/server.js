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

app.get("/me", auth , (req , res)=>{
    User.findById(req.user._id).populate("groups").populate("chats").exec().then((err , user)=>{
        if (err) return res.status(500).send("Internal Server Error");
        res.send(user);
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.delete("/me", auth , (req , res)=>{
    User.findByIdAndDelete(req.user._id).then((err , user)=>{
        if (err) return res.status(500).send("Internal Server Error");
        res.send(user);
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.get("/users/:id", auth , (req , res)=>{
    User.findById(req.params.id).then((err , user)=>{
        if (err) return res.status(500).send("Internal Server Error");
        res.send(user);
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.get("/groups", auth , (req , res)=>{
    User.findById(req.user._id).populate('groups').exec().then((err , user)=>{
        if (err) return res.status(500).send("Internal Server Error");
        res.send(user.groups);
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.post("/groups", auth , (req , res)=>{
    let group = new Group({
        name: req.body.name,
        members: [req.user._id]
    });
    group.save().then((group)=>{
        User.findById(req.user._id).then((user)=>{
            user.groups.push(group._id);
            user.save().then(()=>{
                res.send(group);
            });
        });
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.get("/groups/:id", auth , (req , res)=>{
    Group.findById(req.params.id).populate('members').populate("chat").exec().then((group)=>{
        res.send(group);
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.delete("/groups/:id", auth , (req , res)=>{
    let group = Group.findById(req.params.id);
    if (group.admins.includes(req.user._id)){
        group.delete().then(()=>{
            res.send("Group Deleted");
        }).catch((error)=>{
            res.status(500).send("Internal Server Error");
        });
    } else {
        res.status(401).send("Unauthorized");
    }
});


app.post("/groups/:id/message", auth , (req , res)=>{
    let chat = new Chat({
        group: req.params.id,
        messages: [],
    });
    chat.save().then((chat)=>{
        Group.findById(req.params.id).then((group)=>{
            group.chats.push(chat._id);
            group.save().then(()=>{
                chat.participants = group.members;
                res.send(chat);
            });
        });
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
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
    User.find({id : socket.user.id}).then((user)=>{
        if(user == null){
            user = new User({
                id: socket.user.id,
                username: socket.user.username,
                profileImage: socket.user.profileImage,
                lastOnline: Date.now(),
                groups: [],
                chats: []
            });
        }
        user.online = true;
        user.socketId = socket.id;
        user.save().then(()=>{
            socket.emit("user", user);
        });
    });
    socket.on('disconnect', () => {
        User.find({id : socket.user.id}).then((user)=>{
            user.online = false;
            user.socketId = null;
            user.lastOnline = Date.now();
            user.save();
        });
    });
    socket.on('message', async (msg) => {
        let chat = await Chat.findById(msg.chat);
        if(chat == null) return;
        if(!chat.members.includes(socket.user._id)) return;
        let message = new Message({
            message: msg.message,
            sender: socket.user._id,
            chat: msg.chat,
            date: Date.now()
        });
        message.save().then((message)=>{
            Chat.findById(msg.chat).then((chat)=>{
                chat.messages.push(message._id);
                chat.save().then(()=>{
                    io.to(msg.chat).emit('message', message);
                });
            });
        });
    });
    socket.on('join', (chatId) => {
        Chat.findById(chatId).then((chat)=>{
            if(chat == null) return;
            if(!chat.members.includes(socket.user._id)) return;
            socket.join(chatId);
        });
    });
    socket.on('leave', (chatId) => {
        socket.leave(chatId);
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
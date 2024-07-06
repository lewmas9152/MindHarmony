const dotenv = require('dotenv');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const express = require('express');
const http = require('http');

dotenv.config();

class User {
    constructor(id, uname) {
        this.id = id;
        this.uname = uname;
    }
}

class Message {
    constructor(user, message) {
        this.user = user;
        this.message = message;
    }
}

let users = [];
let messages = [];

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
    }
});
const cors = require('cors');

cors.options = {
    origin: process.env.FRONTEND_URL,
};

app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.redirect(process.env.FRONTEND_URL);
});

app.get("/messages", auth , (req , res)=>{
    res.send(messages);
});

// middleware for express authentication
async function auth(req , res , next){
    let token = req.headers.authorization.split(" ")[1];
    if(!token) return res.status(401);
    const response = await axios.get(`${process.env.AUTH_URL}/user/user-details`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(response.status !== 200) return res.status(401);

    req.user = response.body;
}

// Middleware for socket to verify the token
io.use(async (socket, next) => {
    try {
        const token = socket.handshake.headers.authorization.split(" ")[1];
        if (!token) {
            return next(new Error('Authentication error'));
        }
        
        const response = await axios.get(`${process.env.AUTH_URL}/auth/verify`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            socket.user = response.data;
            next();
        } else {
            next(new Error('Authentication error'));
        }
    } catch (error) {
        next(new Error('Authentication error'));
    }
});

io.on('connection', (socket) => {
    const user = new User(socket.id, socket.user.username);
    users.push(user);
    io.emit('info', `${user.uname} joined the chat`);
    io.emit('stat', users.length);
    
    socket.on('disconnect', () => {
        users = users.filter(u => u.id !== socket.id);
        io.emit('info', `${user.uname} disconnected`);
        io.emit('stat', users.length);
        console.log(`${user.uname} disconnected`);
    });

    socket.on('new-message', (message) => {
        const newMessage = new Message(socket.user.username, message);
        messages.push(newMessage);
        io.emit('message', JSON.stringify(newMessage));
        console.log(`Message received from ${socket.user.username}: ${message}`);
    });

    socket.on('typing', (user) => {
        io.emit('typing', user);
    });
});

server.listen(process.env.PORT, () => {
    console.log('Server started on port: ' + process.env.PORT);
    console.log('Frontend url:' + process.env.FRONTEND_URL);
});
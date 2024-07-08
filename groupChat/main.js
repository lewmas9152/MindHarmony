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
    // res.redirect(process.env.FRONTEND_URL);
    res.sendFile(__dirname + '/chat.html');
});

app.get("/messages", auth , (req , res)=>{
    console.log(req.user);
    res.send(messages);
});

// middleware for express authentication
async function auth(req , res , next){
    if(!req.headers.authorization) return res.status(401).send("Unauthorized");
    var token = req.headers.authorization.split(" ")[1];
    if(!token) return res.status(401);
    try {
        axios.get(`${process.env.AUTH_URL}/user/user-details`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then((response)=>{
            console.log("Response received");
            req.user = response.data.user;
            next();
        }).catch((err)=>{return res.sendStatus(401)});
    } catch (error) {
        return res.sendStatus(401);
    }
}

// Middleware for socket to verify the token
io.use(async (socket, next) => {
    const token = socket.handshake.auth.token || socket.handshake.headers.authorization.split(" ")[1] || null;
    if (!token) {
        return next(new Error('Authentication error'));
    }
    console.log(`token: "${token}"`);
    try {
        axios.get(`${process.env.AUTH_URL}/user/user-details`, {
            headers: {
                Authorization: `Token ${token}`
            }
        }).then((response)=>{
            console.log("Response received");
            socket.user = response.data.user;
            next();
        }).catch((err)=>{return next(new Error('Authentication error'))});
    } catch (error) {
        return next(new Error('Authentication error'));
    }
});

io.on('connection', (socket) => {
    console.log('New connection:' + socket.user);
    const user = new User(socket.id, socket.user.username);
    users.push(user);
    io.emit('info', `${user.uname} joined`);
    io.emit('stat', users.length);
    console.log(`${user.uname} joined`)
    
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
        console.log(`Message from ${socket.user.username}: ${message}`);
    });

    socket.on('typing', () => {
        io.emit('typing', socket.user.username);
    });
});

server.listen(process.env.PORT, () => {
    console.log('Server started on port: ' + process.env.PORT);
    console.log('Frontend url:' + process.env.FRONTEND_URL);
    console.log('Auth url: ' + process.env.AUTH_URL);
});
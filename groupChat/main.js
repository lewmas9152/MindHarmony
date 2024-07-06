const dotenv = require('dotenv');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const express = require('express');
const http = require('http');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*", // development only
    }
});
const cors = require('cors');

cors.options = {
    origin: '*', // development only
};

app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

let users = [];
let messages = [];

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

// Middleware to verify the token
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

    socket.on("new-user", (user) => {
        io.emit("info", `${user} joined the chat`);
        console.log(`${user} joined the chat`);
    });

    socket.on('new-message', (message) => {
        message = JSON.parse(message);
        const newMessage = new Message(socket.user.username, message[1]);
        messages.push(newMessage);
        io.emit('message', JSON.stringify(newMessage));
        console.log(`Message received from ${message[0]}: ${message[1]}`);
    });

    socket.on('typing', (user) => {
        io.emit('typing', user);
    });
});

server.listen(process.env.PORT, () => {
    console.log('Server started on port: ' + process.env.PORT);
});
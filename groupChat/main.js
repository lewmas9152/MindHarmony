// Websocket for group chat, will pull all members from the database and add them to the chat
/**
 * @author Clint171
 */
const dotenv = require('dotenv');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const app = require('express')();
const server = require('http').Server(app);

dotenv.config();

const io = require('socket.io')(server, {
    cors: {
        origin: "*", // development only
    }
});
const cors = require('cors');

cors.options = {
    //! development only
    origin: '*'
}

app.use(cors());
app.use(cookieParser());
app.use((req, res, next) => {
    let token = req.headers.authorization.split(" ")[1];
    console.log("token : "+ token);
    if (!token) {
        return res.sendStatus(401);
    }
    axios.get(`${process.env.AUTH_URL}/auth/verify`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            req.user = response.data;
            next();
        } else {
            res.sendStatus(401);
        }
    }).catch((error) => {
        res.sendStatus(401);
    });
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});
let users = [];
let messages = [];

class User{
    constructor(id, uname){
        this.id = id;
        this.uname = uname;
    }
}

class Message{
    constructor(user, message){
        this.user = user;
        this.message = message;
    }
}

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        let user = users.find(user => user.id === socket.id);
        users = users.filter(user => user.id !== socket.id);
        io.emit('info', `${user.uname} disconnected`);
        io.emit("stat" , users.length)
        console.log(`${user.uname} disconnected`);
    });
    socket.on("new-user", (user) => {
        io.emit("info", `${user} joined the chat`);
        console.log(`${user} joined the chat`);
        let newUser = new User(socket.id, user);
        users.push(newUser);
        io.emit("stat" , users.length)
    })
    socket.on('new-message', (message) => {
        io.emit('message', message);
        message = JSON.parse(message);
        console.log(`Message received from ${message[0]}: ${message[1]}`);
    });
    socket.on('typing', (user) => {
        io.emit('typing', user);
    });
});

server.listen(process.env.PORT, () => {
    console.log('Server started');
});
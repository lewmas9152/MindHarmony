// Websocket for group chat, will pull all members from the database and add them to the chat
/**
 * @author Clint171
 */
const dotenv = require('dotenv');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

dotenv.config();

app.all('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        io.emit('info', 'User disconnected');
        console.log('User disconnected');
    });
    socket.on("new-user", (user) => {
        io.emit("info", `User ${user} joined the chat`);
        console.log(`User ${user} joined the chat`);
    })
    socket.on('new-message', (message) => {
        io.emit('message', message);
        message = JSON.parse(message);
        console.log(`Message received from ${message[0]}: ${message[1]}`);
    });
});

server.listen(process.env.PORT, () => {
    console.log('Server started');
});
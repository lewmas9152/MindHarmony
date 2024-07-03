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
let users = [];
class User{
    constructor(id, uname){
        this.id = id;
        this.uname = uname;
    }
}
io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        let user = users.find(user => user.id === socket.id);
        users = users.filter(user => user.id !== socket.id);
        io.emit('info', `${user.uname} disconnected`);
        console.log(`${user.uname} disconnected`);
    });
    socket.on("new-user", (user) => {
        io.emit("info", `${user} joined the chat`);
        console.log(`${user} joined the chat`);
        let newUser = new User(socket.id, user);
        users.push(newUser);
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
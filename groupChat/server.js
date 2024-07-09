const dotenv = require('dotenv');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const {User , Group , Chat , Message} = require('./db/schema');
const auth = require('./middleware/auth');

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
    res.json({ message: 'Hello World' });
});

app.get("/me", auth , (req , res)=>{
    User.findById(req.user._id).populate().then((err , user)=>{
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

app.get("/groups", auth , (req , res)=>{
    User.findById(req.user._id).populate('groups').then((err , user)=>{
        if (err) return res.status(500).send("Internal Server Error");
        res.send(user.groups);
    }).catch((error)=>{
        res.status(500).send("Internal Server Error");
    });
});

app.get("");

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
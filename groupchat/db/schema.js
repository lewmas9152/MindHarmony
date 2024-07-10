const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    id : {
        type: Number,
        required: true,
        unique: true,
    },
    lastOnline: Date,
    socketId: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false,
    },
    profileImg : {
        type: String,
        default: "default.jpg",
    },
    groups : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group",
        },
    ],
    chats : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
        },
    ],
});

const User = mongoose.model("User", userSchema);

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date : {
        type: Date,
        default: Date.now,
    },
    chat : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    },
});

const Message = mongoose.model("Message", messageSchema);

const chatSchema = new mongoose.Schema({
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const Chat = mongoose.model("Chat", chatSchema);

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    admins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    numberOfMembers: {
        type: Number,
        default: 0,
    },
    numberOfOnlineMembers: {
        type: Number,
        default: 0,
    },
    chat : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = {
    User,
    Message,
    Group,
    Chat
};
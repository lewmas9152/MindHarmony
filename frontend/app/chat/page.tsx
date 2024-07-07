"use client"
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import ChatIcon from "../images/chatscon.svg";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import ChatLogo from "../images/chat1.svg";
import User1 from "../images/avatar-1.jpg";
import User2 from "../images/avatar-2.jpg";
import User3 from "../images/avatar-3.jpg";
import User4 from "../images/avatar-7.jpg";
import User5 from "../images/avatar-5.jpg";
import SendIcon from "../images/send.svg";
import "../sass/Chats.scss";

export default function ChatApp() {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", avatar: User1, online: true, lastMessage: "Hey, how's it going?", typing: false },
        { id: 2, name: "Jane Doe", avatar: User2, online: true, lastMessage: "Can we meet tomorrow?", typing: true },
        { id: 3, name: "Alice Doe", avatar: User3, online: false, lastMessage: "Thanks for your help!", typing: false },
        { id: 4, name: "Bob Doe", avatar: User4, online: true, lastMessage: "I'll check and get back to you.", typing: false },
        { id: 5, name: "Eve Doe", avatar: User5, online: false, lastMessage: "See you next week!", typing: false },
    ]);

    const [groups, setGroups] = useState([
        { id: 1, name: "General", members: [1, 2, 3, 4, 5], lastMessage: "Welcome everyone!" },
        { id: 2, name: "Development", members: [1, 2, 4], lastMessage: "New project kickoff tomorrow" },
        { id: 3, name: "Marketing", members: [2, 3, 5], lastMessage: "Campaign ideas needed" },
        { id: 4, name: "Design", members: [1, 3, 4], lastMessage: "New logo draft" },
    ]);

    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [activeTab, setActiveTab] = useState("chats");

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (userInput.trim() === "") {
            setError("Please enter a message");
            return;
        }
        const newMessage = {
            id: messages.length + 1,
            sender: "currentUser",
            text: userInput,
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
        setUserInput("");
        setIsTyping(false);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setUserInput(event.target.value);
        setIsTyping(true);
    }

    function handleChatSelect(chat) {
        setSelectedChat(chat);
        // Here you would typically fetch messages for the selected chat
        setMessages([
            { id: 1, sender: "other", text: "Hello!", timestamp: new Date(Date.now() - 100000) },
            { id: 2, sender: "currentUser", text: "Hi there!", timestamp: new Date(Date.now() - 80000) },
        ]);
    }

    function handleCreateGroup() {
        const groupName = prompt("Enter group name:");
        if (groupName) {
            const newGroup = {
                id: groups.length + 1,
                name: groupName,
                members: [1], // Add current user as first member
                lastMessage: "Group created",
            };
            setGroups([...groups, newGroup]);
        }
    }

    function handleDeleteGroup(groupId) {
        setGroups(groups.filter(group => group.id !== groupId));
    }

    function handleAddUserToGroup(groupId) {
        const userId = prompt("Enter user ID to add:");
        if (userId) {
            setGroups(groups.map(group => {
                if (group.id === groupId && !group.members.includes(Number(userId))) {
                    return { ...group, members: [...group.members, Number(userId)] };
                }
                return group;
            }));
        }
    }

    return (
        <div className="container">
              <div className="nav-bar">
                <div className="nav-logo">
                    <div className="img-logo">
                        <Image src={ChatLogo} alt="logo" width={40} quality={100} />
                    </div>
                </div>
                <nav className="nav-container">
                    <div className={`nav-item ${activeTab === 'chats' ? 'active' : ''}`} onClick={() => setActiveTab('chats')}>
                        <Image src={ChatIcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        <span>Chats</span>
                    </div>
                    <div className={`nav-item ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => setActiveTab('groups')}>
                        <Image src={Groupcon} alt="Group Icon" width={30} height={30} quality={100} />
                        <span>Groups</span>
                    </div>
                    <div className={`nav-item ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
                        <Image src={UserIcon} alt="User Icon" width={30} height={30} quality={100} />
                        <span>Users</span>
                    </div>
                </nav>
            </div>
            <div className="content-container">
                <div className="top">
                    <div className="top-content">
                        <h1>{activeTab === "chats" ? "All Chats" : activeTab === "groups" ? "Groups" : "Users"}</h1>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                {activeTab === "chats" && (
                    <div className="chat-list">
                        {users.map((user) => (
                            <div key={user.id} className={`chat-item ${selectedChat?.id === user.id ? 'active' : ''}`} onClick={() => handleChatSelect(user)}>
                                <div className="chat-profile">
                                    <Image src={user.avatar} alt={`User ${user.id}`} width={50} height={50} quality={100} />
                                    <div className={`status-indicator ${user.online ? 'online' : 'offline'}`}></div>
                                </div>
                                <div className="chat-info">
                                    <div className="chat-name">{user.name}</div>
                                    <div className="last-message">{user.lastMessage}</div>
                                    {user.typing && <div className="typing-indicator">typing...</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === "groups" && (
                    <div className="groups-list">
                        <button className="create-group" onClick={handleCreateGroup}>Create New Group</button>
                        {groups.map((group) => (
                            <div key={group.id} className={`group-item ${selectedChat?.id === group.id ? 'active' : ''}`}>
                                <div className="group-icon" onClick={() => handleChatSelect(group)}>{group.name[0]}</div>
                                <div className="group-info" onClick={() => handleChatSelect(group)}>
                                    <div className="group-name">{group.name}</div>
                                    <div className="group-members">{group.members.length} members</div>
                                    <div className="last-message">{group.lastMessage}</div>
                                </div>
                                <div className="group-actions">
                                    <button className="add-user" onClick={() => handleAddUserToGroup(group.id)}>Add User</button>
                                    <button className="delete-group" onClick={() => handleDeleteGroup(group.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === "users" && (
                    <div className="users-list">
                        {users.map((user) => (
                            <div key={user.id} className={`user-item ${user.online ? 'online' : 'offline'}`} onClick={() => handleChatSelect(user)}>
                                <div className="user-profile">
                                    <Image src={user.avatar} alt={`User ${user.id}`} width={50} height={50} quality={100} />
                                    <div className={`status-indicator ${user.online ? 'online' : 'offline'}`}></div>
                                </div>
                                <div className="user-info">
                                    <div className="user-name">{user.name}</div>
                                    <div className="user-status">{user.online ? 'Online' : 'Offline'}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="chat-area">
                <div className="chat-header">
                    {selectedChat && (
                        <>
                            <div className="chat-profile">
                                <Image src={selectedChat.avatar || ChatLogo} alt={selectedChat.name} width={40} height={40} quality={100} />
                            </div>
                            <div className="chat-info">
                                <h2>{selectedChat.name}</h2>
                                {isTyping && <div className="typing-indicator">typing...</div>}
                            </div>
                        </>
                    )}
                </div>
                <div className="conversation">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.sender === 'currentUser' ? 'user' : 'other'}`}>
                            <div className="message-content">
                                <div className="message-text">{message.text}</div>
                                <div className="message-time">{message.timestamp.toLocaleTimeString()}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="message-input">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        placeholder="Type a message..."
                    />
                    <button type="submit">
                        <Image src={SendIcon} alt="Send" width={24} height={24} />
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}
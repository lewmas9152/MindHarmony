"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ChatIcon from "../images/chatscon.svg";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import ChatLogo from "../images/chat2.png";
import User1 from "../images/avatar-1.jpg";
import User2 from "../images/avatar-2.jpg";
import User3 from "../images/avatar-3.jpg";
import User4 from "../images/avatar-7.jpg";
import User5 from "../images/avatar-5.jpg";
import "../sass/Chats.scss";

export default function SupportGroups() {
    const [activeUsers] = useState([
        { id: 1, name: "John Doe", avatar: User1 },
        { id: 2, name: "Jane Doe", avatar: User2 },
        { id: 3, name: "Alice Doe", avatar: User3 },
        { id: 4, name: "Bob Doe", avatar: User4 },
        { id: 5, name: "Eve Doe", avatar: User5 },
    ]);

    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        setMessages([]); // Clear previous chat messages
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim() === "") {
            setError("Please enter a message.");
            return;
        }

        const newMessage = {
            id: messages.length + 1,
            text: userInput,
            sender: "currentUser",
        };

        setMessages([...messages, newMessage]);
        setUserInput("");
        setError("");

        // Simulate a response from the selected user
        setTimeout(() => {
            const responseMessage = {
                id: messages.length + 2,
                text: `Hi, this is ${selectedUser.name}. How can I help you?`,
                sender: selectedUser.id,
            };
            setMessages((prevMessages) => [...prevMessages, responseMessage]);
        }, 1000);
    };

    return (
        <div className="container">
           <div className="nav-bar">
                <div className="nav-logo">
                    <div className="img-logo">
                        <Image src={ChatLogo} alt="logo" width={40} quality={100} />
                    </div>
                </div>
                <nav className="nav-container">
                    <div className="chats-container">
                        <div className="image-cont">
                            <Image src={ChatIcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        </div>
                        <div className="chat-item">
                            <Link href="/chat/chats">Chats</Link>
                        </div>
                    </div>
                    <div className="group-container">
                        <div className="image-cont">
                            <Image src={Groupcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        </div>
                        <div className="group-item">
                            <Link href="/chat/groups">Groups</Link>
                        </div>
                    </div>
                    <div className="user-container">
                        <div className="image-cont">
                            <Image src={UserIcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        </div>
                        <div className="user-item">
                            <Link href="/chat/users">Users</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="content-container">
                <div className="top">
                    <div className="top-content">
                        <h1>All Chats</h1>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="active-users">
                    <h2>Active Users</h2>
                    <div className="active">
                        {activeUsers.map((user) => (
                            <div key={user.id} className={`user${user.id}`} onClick={() => handleUserSelect(user)}>
                                <div className="user-profile">
                                    <Image src={user.avatar} alt={`User ${user.id}`} width={50} height={50} quality={100} />
                                    <div className="online-status"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chat-list">
                    {activeUsers.map((user) => (
                        <div key={user.id} className={`chat${user.id}`} onClick={() => handleUserSelect(user)}>
                            <div className="chat-profile">
                                <Image src={user.avatar} alt={`User ${user.id}`} width={50} height={50} quality={100} />
                            </div>
                            <div className="chat-name">{user.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chat-area">
                {selectedUser ? (
                    <>
                    <div className="header-chat">
                        <div className="current-user-image">
                            <Image src={User1} alt="User 1" width={50} height={50} quality={100} />
                        </div>

                        <h2>Chat with {selectedUser.name}</h2>
                        </div>
                        <div className="conversation">
                            {messages.map((message) => (
                                <div key={message.id} className={`message ${message.sender === 'currentUser' ? 'user' : 'other'}`}>
                                    <img 
                                        src={message.sender === 'currentUser' ? '/path/to/current-user-avatar.jpg' : selectedUser.avatar.src} 
                                        alt={message.sender === 'currentUser' ? 'You' : selectedUser.name} 
                                        className="avatar" 
                                    />
                                    <div className="text">{message.text}</div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                                placeholder="Start typing here..."
                            />
                            <button type="submit">Send</button>
                        </form>
                        {error && <p className="error">{error}</p>}
                    </>
                ) : (
                    <p>Select a user to start chatting</p>
                )}
            </div>
        </div>
    );
}
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
import User6 from "../images/avatar-6.jpg";
import User7 from "../images/avatar-8.jpg";
import User8 from "../images/avatar-9.jpg";
import User9 from "../images/avatar-10.jpg";
import User10 from "../images/avatar-11.jpg";
import SendIcon from "../images/send.svg";
import ThemeIcon from "../images/theme.svg";
import "../sass/Chats.scss";

export default function ChatApp() {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", avatar: User1, online: true, lastMessage: "Hey, how's it going?", typing: false },
        { id: 2, name: "Jane Doe", avatar: User2, online: true, lastMessage: "Can we meet tomorrow?", typing: true },
        { id: 3, name: "Alice Smith", avatar: User3, online: false, lastMessage: "Thanks for your help!", typing: false },
        { id: 4, name: "Bob Johnson", avatar: User4, online: true, lastMessage: "I'll check and get back to you.", typing: false },
        { id: 5, name: "Eve Williams", avatar: User5, online: false, lastMessage: "See you next week!", typing: false },
        { id: 6, name: "Charlie Brown", avatar: User6, online: true, lastMessage: "Let's catch up soon!", typing: false },
        { id: 7, name: "Diana Prince", avatar: User7, online: true, lastMessage: "How about lunch?", typing: true },
        { id: 8, name: "Frank Castle", avatar: User8, online: false, lastMessage: "Project deadline extended.", typing: false },
        { id: 9, name: "Grace Hopper", avatar: User9, online: true, lastMessage: "New bug found in the system.", typing: false },
        { id: 10, name: "Hank Pym", avatar: User10, online: true, lastMessage: "Innovative ideas for the next sprint!", typing: true },
    ]);

    const [groups, setGroups] = useState([
        { id: 1, name: "General", members: [1, 2, 3, 4, 5], lastMessage: "Welcome everyone!", typing: [2, 4] },
        { id: 2, name: "Development", members: [1, 2, 4, 6, 8], lastMessage: "New project kickoff tomorrow", typing: [1] },
        { id: 3, name: "Marketing", members: [2, 3, 5, 7, 9], lastMessage: "Campaign ideas needed", typing: [] },
        { id: 4, name: "Design", members: [1, 3, 4, 8, 10], lastMessage: "New logo draft", typing: [3, 10] },
    ]);

    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [activeTab, setActiveTab] = useState("chats");
    const [theme, setTheme] = useState('light');
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

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
        if ('members' in chat) {
            // It's a group chat
            setMessages([
                { id: 1, sender: 2, text: "Hello everyone!", timestamp: new Date(Date.now() - 100000) },
                { id: 2, sender: 4, text: "Hi there! What's the agenda for today?", timestamp: new Date(Date.now() - 80000) },
                { id: 3, sender: 1, text: "We need to discuss the new feature.", timestamp: new Date(Date.now() - 60000) },
                { id: 4, sender: 3, text: "I have some ideas to share.", timestamp: new Date(Date.now() - 40000) },
            ]);
        } else {
            // It's a one-on-one chat
            setMessages([
                { id: 1, sender: chat.id, text: "Hello!", timestamp: new Date(Date.now() - 100000) },
                { id: 2, sender: "currentUser", text: "Hi there!", timestamp: new Date(Date.now() - 80000) },
                { id: 3, sender: chat.id, text: "How are you doing?", timestamp: new Date(Date.now() - 60000) },
                { id: 4, sender: "currentUser", text: "I'm good, thanks! How about you?", timestamp: new Date(Date.now() - 40000) },
            ]);
        }
    }

    function handleCreateGroup() {
        const groupName = prompt("Enter group name:");
        if (groupName) {
            const newGroup = {
                id: groups.length + 1,
                name: groupName,
                members: [1],
                lastMessage: "Group created",
                typing: [],
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
                        <span className="tooltip">Chats</span>
                    </div>
                    <div className={`nav-item ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => setActiveTab('groups')}>
                        <Image src={Groupcon} alt="Group Icon" width={30} height={30} quality={100} />
                        <span className="tooltip">Groups</span>
                    </div>
                    <div className={`nav-item ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
                        <Image src={UserIcon} alt="User Icon" width={30} height={30} quality={100} />
                        <span className="tooltip">Users</span>
                    </div>
                </nav>
                <div className="nav-bottom">
                    <div className="nav-item theme-switcher">
                        <label className="theme-toggle">
                            <input
                                type="checkbox"
                                checked={theme === 'dark'}
                                onChange={toggleTheme}
                            />
                            <span className="slider"></span>
                        </label>
                        <span className="tooltip">Switch Theme</span>
                    </div>
                    <div className="nav-item user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                        <Image src={User1} alt="User Profile" width={30} height={30} quality={100} />
                        <span className="tooltip">Profile</span>
                    </div>
                    {showProfileMenu && (
                        <div className="profile-menu">
                            <div className="menu-item">Profile</div>
                            <div className="menu-item">Settings</div>
                            <div className="menu-item">Logout</div>
                        </div>
                    )}
                </div>
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
                    <>
                        <div className="active-users">
                            {users.filter(user => user.online).map((user) => (
                                <div key={user.id} className="active-user">
                                    <Image src={user.avatar} alt={user.name} width={40} height={40} quality={100} />
                                    {user.typing && <div className="typing-indicator">...</div>}
                                </div>
                            ))}
                        </div>
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
                    </>
                )}
                {activeTab === "groups" && (
                    <div className="groups-list">
                        <button className="create-group" onClick={handleCreateGroup}>Create New Group</button>
                        {groups.map((group) => (
                            <div key={group.id} className={`group-item ${selectedChat?.id === group.id ? 'active' : ''}`}>
                                <div className="group-icon" onClick={() => handleChatSelect(group)}>
                                    <div className="group-members-avatars">
                                        {group.members.slice(0, 3).map((memberId) => (
                                            <Image key={memberId} src={users.find(u => u.id === memberId).avatar} alt={`Member ${memberId}`} width={20} height={20} quality={100} />
                                        ))}
                                        {group.members.length > 3 && <span>+{group.members.length - 3}</span>}
                                    </div>
                                </div>
                                <div className="group-info" onClick={() => handleChatSelect(group)}>
                                    <div className="group-name">{group.name}</div>
                                    <div className="group-members">{group.members.length} members</div>
                                    <div className="last-message">{group.lastMessage}</div>
                                    {group.typing.length > 0 && (
                                        <div className="typing-indicator">
                                            {group.typing.map(id => users.find(u => u.id === id).name).join(', ')} {group.typing.length === 1 ? 'is' : 'are'} typing...
                                        </div>
                                    )}
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
                                {'members' in selectedChat ? (
                                    <div className="group-members-avatars">
                                        {selectedChat.members.slice(0, 3).map((memberId) => (
                                            <Image key={memberId} src={users.find(u => u.id === memberId).avatar} alt={`Member ${memberId}`} width={20} height={20} quality={100} />
                                        ))}
                                        {selectedChat.members.length > 3 && <span>+{selectedChat.members.length - 3}</span>}
                                    </div>
                                ) : (
                                    <Image src={selectedChat.avatar} alt={selectedChat.name} width={40} height={40} quality={100} />
                                )}
                            </div>
                            <div className="chat-info">
                                <h2>{selectedChat.name}</h2>
                                {'members' in selectedChat ? (
                                    <div className="group-members">{selectedChat.members.length} members</div>
                                    ) : (
                                    <div className={`user-status ${selectedChat.online ? 'online' : 'offline'}`}>
                                        {selectedChat.online ? 'Online' : 'Offline'}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="conversation">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.sender === 'currentUser' ? 'user' : 'other'}`}>
                            {'members' in selectedChat && message.sender !== 'currentUser' && (
                                <div className="message-avatar">
                                    <Image src={users.find(u => u.id === message.sender).avatar} alt={`User ${message.sender}`} width={30} height={30} quality={100} />
                                </div>
                            )}
                            <div className="message-content" style={{backgroundColor: `hsl(${message.sender * 20}, 70%, 80%)`}}>
                                {'members' in selectedChat && message.sender !== 'currentUser' && (
                                    <div className="message-sender">{users.find(u => u.id === message.sender).name}</div>
                                )}
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
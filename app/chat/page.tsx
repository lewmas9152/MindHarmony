"use client"
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import ChatIcon from "../images/chatscon.svg";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import ChatLogo from "../images/chat3.svg";
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
import io from 'socket.io-client';

export default function ChatApp() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alex (Anxiety)",
      avatar: User1,
      online: true,
      lastMessage: "Feeling anxious about work today.",
      typing: false
    },
    {
      id: 2,
      name: "Dr. Sarah (Therapist)",
      avatar: User2,
      online: true,
      lastMessage: "Remember your coping strategies.",
      typing: true
    },
    {
      id: 3,
      name: "Mike (Depression)",
      avatar: User3,
      online: false,
      lastMessage: "Had a good day today!",
      typing: false
    },
    {
      id: 4,
      name: "Emma (PTSD)",
      avatar: User4,
      online: true,
      lastMessage: "Struggling with flashbacks.",
      typing: false
    },
    {
      id: 5,
      name: "Dr. James (Psychiatrist)",
      avatar: User5,
      online: false,
      lastMessage: "How's the new medication working?",
      typing: false
    },
    {
      id: 6,
      name: "Lily (Bipolar)",
      avatar: User6,
      online: true,
      lastMessage: "Feeling more stable this week.",
      typing: false
    },
    {
      id: 7,
      name: "Tom (OCD)",
      avatar: User7,
      online: true,
      lastMessage: "Trying exposure therapy.",
      typing: true
    },
    {
      id: 8,
      name: "Sophie (Eating Disorder)",
      avatar: User8,
      online: false,
      lastMessage: "Nervous about meal plan.",
      typing: false
    },
    {
      id: 9,
      name: "Ryan (Addiction Recovery)",
      avatar: User9,
      online: true,
      lastMessage: "30 days sober today!",
      typing: false
    },
    {
      id: 10,
      name: "Mia (Social Anxiety)",
      avatar: User10,
      online: true,
      lastMessage: "Practiced self-affirmations today.",
      typing: true
    }
  ]);

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Anxiety Support",
      members: [1, 2, 3, 4, 5],
      lastMessage: "Welcome to our safe space!",
      typing: [2, 4]
    },
    {
      id: 2,
      name: "Depression Management",
      members: [1, 2, 3, 6, 8],
      lastMessage: "Sharing coping strategies",
      typing: [1]
    },
    {
      id: 3,
      name: "PTSD Support",
      members: [2, 3, 4, 7, 9],
      lastMessage: "Grounding techniques discussion",
      typing: []
    },
    {
      id: 4,
      name: "General Mental Health",
      members: [1, 3, 5, 8, 10],
      lastMessage: "Weekly check-in: How are we doing?",
      typing: [3, 10]
    }
  ]);

  const url = 'https://mindharmony-chat.onrender.com';
  const token : String = '63c5e488b8001b9aba990f6162642452018e754c';
  fetch(url+'/auth-backend', {
    method: 'GET',
    headers:{
      'Authorization': `Token ${token}`
    }
  }).then((res) => {
    console.log(res.json());
  });
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState("chats");
  const [theme, setTheme] = useState("dark");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
      timestamp: new Date()
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
    // Example of initializing messages state when chat is selected
    const initialMessages = [
      { id: 1, sender: 2, text: "Hello!", timestamp: new Date() },
      { id: 2, sender: "currentUser", text: "Hi there!", timestamp: new Date() }
    ];
    setMessages(initialMessages);
  }

  function handleCreateGroup() {
    const groupName = prompt("Enter support group name:");
    if (groupName) {
      const newGroup = {
        id: groups.length + 1,
        name: groupName,
        members: [1],
        lastMessage: "Support group created",
        typing: []
      };
      setGroups([...groups, newGroup]);
    }
  }

  function handleDeleteGroup(groupId) {
    setGroups(groups.filter((group) => group.id !== groupId));
  }

  function handleAddUserToGroup(groupId) {
    const userId = prompt("Enter user ID to add to the support group:");
    if (userId) {
      setGroups(
        groups.map((group) => {
          if (group.id === groupId && !group.members.includes(Number(userId))) {
            return { ...group, members: [...group.members, Number(userId)] };
          }
          return group;
        })
      );
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
          <div
            className={`nav-item ${activeTab === "chats" ? "active" : ""}`}
            onClick={() => setActiveTab("chats")}
          >
            <Image
              src={ChatIcon}
              alt="Chat Icon"
              width={30}
              height={30}
              quality={100}
            />
            <span className="tooltip">Chats</span>
          </div>
          <div
            className={`nav-item ${activeTab === "groups" ? "active" : ""}`}
            onClick={() => setActiveTab("groups")}
          >
            <Image
              src={Groupcon}
              alt="Group Icon"
              width={30}
              height={30}
              quality={100}
            />
            <span className="tooltip">Groups</span>
          </div>
          <div
            className={`nav-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <Image
              src={UserIcon}
              alt="User Icon"
              width={30}
              height={30}
              quality={100}
            />
            <span className="tooltip">Users</span>
          </div>
        </nav>
        <div className="nav-bottom">
          <div className="nav-item theme-switcher">
            <label className="theme-toggle">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
            <span className="tooltip">Toggle theme</span>
          </div>
          <div
            className="nav-item profile-menu"
            onClick={() => setShowProfileMenu((prevState) => !prevState)}
          >
            <Image
              src={ThemeIcon}
              alt="Profile Icon"
              width={30}
              height={30}
              quality={100}
            />
            <span className="tooltip">Profile</span>
            {showProfileMenu && (
              <ul className="profile-dropdown">
                <li>Settings</li>
                <li>Log Out</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="chats">
        {activeTab === "chats" && (
          <>
            {users.map((user) => (
              <div
                className={`chat ${selectedChat === user.id ? "active" : ""}`}
                key={user.id}
                onClick={() => handleChatSelect(user.id)}
              >
                <div className="avatar">
                  <Image
                    src={user.avatar}
                    alt={`${user.name} Avatar`}
                    width={50}
                    height={50}
                    quality={100}
                  />
                  {user.online && <div className="status online"></div>}
                </div>
                <div className="details">
                  <span className="name">{user.name}</span>
                  <span className="last-message">{user.lastMessage}</span>
                  {user.typing && <span className="typing-indicator">Typing...</span>}
                </div>
              </div>
            ))}
          </>
        )}
        {activeTab === "groups" && (
          <>
            {groups.map((group) => (
              <div
                className={`chat ${selectedChat === group.id ? "active" : ""}`}
                key={group.id}
                onClick={() => handleChatSelect(group.id)}
              >
                <div className="avatar">
                  <Image
                    src={Groupcon}
                    alt={`${group.name} Avatar`}
                    width={50}
                    height={50}
                    quality={100}
                  />
                </div>
                <div className="details">
                  <span className="name">{group.name}</span>
                  <span className="last-message">{group.lastMessage}</span>
                  {group.typing.length > 0 && (
                    <span className="typing-indicator">Typing...</span>
                  )}
                </div>
                <div className="group-actions">
                  <button
                    className="delete-group"
                    onClick={() => handleDeleteGroup(group.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="add-user"
                    onClick={() => handleAddUserToGroup(group.id)}
                  >
                    Add User
                  </button>
                </div>
              </div>
            ))}
            <div className="create-group">
              <button onClick={handleCreateGroup}>Create Group</button>
            </div>
          </>
        )}
        {activeTab === "users" && (
          <div className="users">
            <h2>Users</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <div className="user-avatar">
                    <Image
                      src={user.avatar}
                      alt={`${user.name} Avatar`}
                      width={50}
                      height={50}
                      quality={100}
                    />
                  </div>
                  <span className="user-name">{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selectedChat && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="avatar">
              <Image
                src={
                  selectedChat.avatar
                    ? selectedChat.avatar
                    : Groupcon
                }
                alt={`${selectedChat.name} Avatar`}
                width={50}
                height={50}
                quality={100}
              />
              {selectedChat.online && (
                <div className="status online"></div>
              )}
            </div>
            <div className="details">
              <span className="name">{selectedChat.name}</span>
              <span className="last-seen">
                {selectedChat.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                className={`message ${
                  message.sender === "currentUser" ? "sent" : "received"
                }`}
                key={message.id}
              >
                <p>{message.text}</p>
                <span className="timestamp">
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "numeric"
                  })}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="message typing">
                <p>Typing...</p>
              </div>
            )}
          </div>
          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleInputChange}
            />
            <button type="submit">
              <Image
                src={SendIcon}
                alt="Send Icon"
                width={30}
                height={30}
                quality={100}
              />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

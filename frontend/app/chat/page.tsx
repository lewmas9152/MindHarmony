"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import ChatIcon from "../images/chatscon.svg";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import ChatLogo from "../images/chat3.svg";
import User1 from "../images/avatar-1.jpg";
import User2 from "../images/avatar-2.jpg";
import User3 from "../images/avatar-3.jpg";
import User4 from "../images/avatar-10.jpg";
import User5 from "../images/avatar-5.jpg";
import User6 from "../images/avatar-6.jpg";
import SendIcon from "../images/send.svg";
import "../sass/Chats.scss";

interface User {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  lastMessage: string;
}

interface Group {
  id: number;
  name: string;
  members: number[];
  lastMessage: string;
}

interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: Date;
}

export default function ChatApp() {
  const [users] = useState<User[]>([
    { id: 1, name: "Alex", avatar: User1.src, online: true, lastMessage: "Hello" },
    { id: 2, name: "Sarah", avatar: User2.src, online: true, lastMessage: "How are you?" },
    { id: 3, name: "Mike", avatar: User3.src, online: false, lastMessage: "Good day" },
    { id: 4, name: "Emma", avatar: User4.src, online: true, lastMessage: "See you soon" },
    { id: 5, name: "James", avatar: User5.src, online: false, lastMessage: "Thanks" },
    { id: 6, name: "Lily", avatar: User6.src, online: true, lastMessage: "Okay" },
  ]);

  const [groups] = useState<Group[]>([
    { id: 1, name: "Support Group 1", members: [1, 2, 3], lastMessage: "Welcome!" },
    { id: 2, name: "Support Group 2", members: [4, 5, 6], lastMessage: "Hello everyone" },
  ]);

  const [selectedChat, setSelectedChat] = useState<User | Group | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [activeTab, setActiveTab] = useState("chats");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (userInput.trim() === "") return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "currentUser",
      text: userInput,
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
    setUserInput("");
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setUserInput(event.target.value);
  }

  function handleChatSelect(chat: User | Group) {
    setSelectedChat(chat);
    setMessages([]);
  }

  return (
    <div className="container-chats">
      <div className="nav-bar-chats">
        <div className="nav-logo">
          <Image src={ChatLogo} alt="logo" width={40} height={40} />
        </div>
        <nav className="nav-container">
          <div className={`nav-item ${activeTab === "chats" ? "active" : ""}`} onClick={() => setActiveTab("chats")}>
            <Image src={ChatIcon} alt="Chat Icon" width={30} height={30} />
          </div>
          <div className={`nav-item ${activeTab === "groups" ? "active" : ""}`} onClick={() => setActiveTab("groups")}>
            <Image src={Groupcon} alt="Group Icon" width={30} height={30} />
          </div>
          <div className={`nav-item ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>
            <Image src={UserIcon} alt="User Icon" width={30} height={30} />
          </div>
        </nav>
      </div>
      <div className="content-container">
        <div className="top">
          <h1>{activeTab === "chats" ? "All Chats" : activeTab === "groups" ? "Support Groups" : "Community Members"}</h1>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        {activeTab === "chats" && (
          <div className="chat-list">
            {users.map((user) => (
              <div key={user.id} className={`chat-item ${selectedChat?.id === user.id ? "active" : ""}`} onClick={() => handleChatSelect(user)}>
                <Image src={user.avatar} alt={`User ${user.id}`} width={50} height={50} />
                <div className="chat-info">
                  <div className="chat-name">{user.name}</div>
                  <div className="last-message">{user.lastMessage}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "groups" && (
          <div className="groups-list">
            {groups.map((group) => (
              <div key={group.id} className={`group-item ${selectedChat?.id === group.id ? "active" : ""}`} onClick={() => handleChatSelect(group)}>
                <div className="group-info">
                  <div className="group-name">{group.name}</div>
                  <div className="group-members">{group.members.length} members</div>
                  <div className="last-message">{group.lastMessage}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="chat-area">
        {selectedChat && (
          <div className="chat-header">
            <h2>{selectedChat.name}</h2>
          </div>
        )}
        <div className="conversation">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender === "currentUser" ? "user" : "other"}`}>
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
      </div>
    </div>
  );
}
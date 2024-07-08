# Chat Service Documentation

## Overview
This documentation provides a comprehensive guide to the HTTP endpoints and WebSocket events available for the chat service. Additionally, it includes instructions for installing `socket.io` in a Node.js and React environment, setting up authorization, sending requests to the server, and emitting events to the server.

## Table of Contents
- [Chat Service Documentation](#chat-service-documentation)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Node.js](#nodejs)
    - [React](#react)
  - [HTTP Endpoints](#http-endpoints)
    - [GET /](#get-)
    - [GET /messages](#get-messages)
  - [WebSocket Events](#websocket-events)
    - [Connection](#connection)
    - [Disconnection](#disconnection)
    - [New Message](#new-message)
  - [Client-Side Events](#client-side-events)
    - [Info](#info)
    - [Stat](#stat)
    - [Typing](#typing)
  - [Client-Emitted Events](#client-emitted-events)
    - [New Message](#new-message-1)
    - [Typing](#typing-1)
  - [Authorization](#authorization)
    - [HTTP Requests](#http-requests)
    - [WebSocket Setup](#websocket-setup)
  - [Sending Requests](#sending-requests)
    - [HTTP Requests](#http-requests-1)
    - [WebSocket Setup](#websocket-setup-1)

## Installation

### Node.js
To install `socket.io` in a Node.js environment:
```bash
npm install socket.io-client
```

### React
To install `socket.io` in a React project:
```bash
npm install socket.io-client
```
Usage:
```javascript
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_BACKEND_URL, {
  extraHeaders: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
```

## HTTP Endpoints

### GET /
Redirects to the frontend URL specified in the environment variables.

**Request:**
```http
GET /
```

**Response:**
Redirects to `process.env.FRONTEND_URL`.

### GET /messages
Retrieves the list of chat messages. Requires authentication.

**Request:**
```http
GET /messages
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "user": {
      "id": "user_id",
      "uname": "username"
    },
    "message": "message_content"
  },
  ...
]
```

## WebSocket Events

### Connection
Emitted when a new user connects to the WebSocket server.

**Event:**
```javascript
socket.on('connection', (data) => {
  console.log(data); // `{user} joined`
});
```

### Disconnection
Emitted when a user disconnects from the WebSocket server.

**Event:**
```javascript
socket.on('disconnect', (data) => {
  console.log(data); // `{user} disconnected`
});
```

### New Message
Emitted when a new message is received.

**Event:**
```javascript
socket.on('message', (data) => {
  const message = JSON.parse(data);
  console.log(message); // `{user, message}`
});
```

## Client-Side Events

### Info
Emitted to provide information about user connection and disconnection.

**Event:**
```javascript
socket.on('info', (data) => {
  console.log(data); // `{user} joined/disconnected`
});
```

### Stat
Emitted to provide the current number of connected users.

**Event:**
```javascript
socket.on('stat', (data) => {
  console.log(`Number of users: ${data}`);
});
```

### Typing
Emitted when a user is typing.

**Event:**
```javascript
socket.on('typing', (user) => {
  console.log(`${user} is typing...`);
});
```

## Client-Emitted Events

### New Message
Emits a new message to the server.

**Event:**
```javascript
socket.emit('new-message', 'Your message here');
```

### Typing
Notifies the server that the user is typing.

**Event:**
```javascript
socket.emit('typing');
```

## Authorization

The server uses token-based authentication. The token must be included in the `Authorization` header as `Token <token>` for both HTTP requests and WebSocket connections.

### HTTP Requests
For HTTP requests, include the token in the `Authorization` header:
```http
Authorization: Token <token>
```

### WebSocket Setup
For WebSocket connections, include the token in the `auth` option:
```javascript
const socket = io(process.env.BACKEND_URL, {
  auth: {
          token: `fa4c7a0e2a9719f6b8150c0f2e891a1c4c0d7961`
        }
});
```

## Sending Requests

### HTTP Requests
To send an authenticated request to the server:

**Example: Fetching messages**
```javascript
fetch(`${process.env.BACKEND_URL}/messages`, {
  headers: {
    'Authorization': `Token ${localStorage.getItem('token')}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### WebSocket Setup
To establish a WebSocket connection and handle events:

**Example: Setting up socket connection and listening to events**
```javascript
import io from 'socket.io-client';

const socket = io(process.env.BACKEND_URL, {
  auth: {
          token: `fa4c7a0e2a9719f6b8150c0f2e891a1c4c0d7961`
        }
});

socket.on('info', (data) => {
  console.log(data); // `{user} joined/disconnected`
});

socket.on('stat', (data) => {
  console.log(`Number of users: ${data}`);
});

socket.on('message', (data) => {
  const message = JSON.parse(data);
  console.log(message); // `{user, message}`
});

socket.on('typing', (user) => {
  console.log(`${user} is typing...`);
});

// Emitting events to the server
socket.emit('new-message', 'Your message here');
socket.emit('typing', 'username');
```
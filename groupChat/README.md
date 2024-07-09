### REST API Endpoints

#### Base URL
```
https://mindharmony-chat.onrender.com
```

#### 1. Get API Welcome Message
**Endpoint:** `GET /`

**Description:** Returns a welcome message.

**Response:**
```json
{
    "message": "Hello User! This is an api :)"
}
```

#### 2. Get Current User Info
**Endpoint:** `GET /me`

**Description:** Returns the current authenticated user's information.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
{
    "_id": "user-id",
    "username": "user-name",
    "groups": [...],
    "chats": [...]
}
```

#### 3. Update Current User Info
**Endpoint:** `PUT /me`

**Description:** Updates the current authenticated user's information.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Body:**
```json
{
    "username": "new-username"
}
```

**Response:**
```json
{
    "_id": "user-id",
    "username": "new-username",
    ...
}
```

#### 4. Delete Current User
**Endpoint:** `DELETE /me`

**Description:** Deletes the current authenticated user.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
{
    "message": "User deleted successfully"
}
```

#### 5. Get User by ID
**Endpoint:** `GET /users/:id`

**Description:** Returns the user information for a specific user by ID.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
{
    "_id": "user-id",
    "username": "user-name",
    ...
}
```

#### 6. Get Groups for Current User
**Endpoint:** `GET /groups`

**Description:** Returns all groups that the current authenticated user is a member of.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
[
    {
        "_id": "group-id",
        "name": "group-name",
        ...
    },
    ...
]
```

#### 7. Create New Group
**Endpoint:** `POST /groups`

**Description:** Creates a new group and adds the current authenticated user as a member and admin.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Body:**
```json
{
    "name": "new-group-name"
}
```

**Response:**
```json
{
    "_id": "group-id",
    "name": "new-group-name",
    "members": [...],
    "admins": [...],
    "chat": "chat-id"
}
```

#### 8. Get Group by ID
**Endpoint:** `GET /groups/:id`

**Description:** Returns the details of a specific group by ID.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
{
    "_id": "group-id",
    "name": "group-name",
    "members": [...],
    "chat": {...}
}
```

#### 9. Delete Group by ID
**Endpoint:** `DELETE /groups/:id`

**Description:** Deletes a specific group by ID if the current user is an admin.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
{
    "message": "Group Deleted"
}
```

#### 10. Join Group by ID
**Endpoint:** `GET /groups/:id/join`

**Description:** Adds the current authenticated user to a specific group by ID.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
{
    "message": "Joined group successfully"
}
```

#### 11. Get Chats for Current User
**Endpoint:** `GET /chats`

**Description:** Returns all chats that the current authenticated user is a participant of.

**Headers:**
```json
{
    "Authorization": "Token <user-token>"
}
```

**Response:**
```json
[
    {
        "_id": "chat-id",
        "participants": [...],
        "messages": [...]
    },
    ...
]
```

### Socket.io Events

#### Connecting to the Server
```javascript
const socket = io('http://localhost:3001', {
    auth: {
        token: "your-token"
    }
});
```

#### Receiving User Data
```javascript
socket.on('user', (data) => {
    console.log('User data:', data);
});
```

#### Typing Indicator
```javascript
// Emitting typing event
socket.emit('typing', chatId);

// Receiving typing event
socket.on('typing', (username) => {
    console.log(`${username} is typing...`);
});

// Emitting stop typing event
socket.emit('stopTyping', chatId);

// Receiving stop typing event
socket.on('stopTyping', (username) => {
    console.log(`${username} stopped typing.`);
});
```

#### Sending and Receiving Messages
```javascript
// Emitting a new message
socket.emit('message', {
    chat: chatId,
    message: 'Hello, World!'
});

// Receiving new messages
socket.on('message', (data) => {
    console.log('New message:', data);
});
```

#### Joining and Leaving Chats
```javascript
// Joining a chat
socket.emit('join', chatId);

// Leaving a chat
socket.emit('leave', chatId);
```

#### Creating New Chat
```javascript
socket.emit('new-chat', {
    participants: ["user-id1", "user-id2"]
});
```

#### Handling Disconnect
```javascript
socket.on('disconnect', () => {
    console.log('User disconnected');
});
```

### Example of Usage in a Frontend Application

```javascript
// Connect to the server
const socket = io('http://localhost:3001', {
    auth: {
        token: 'your-auth-token'
    }
});

// Get current user info
socket.on('user', (data) => {
    console.log('User data:', data);
});

// Handle typing indicator
function startTyping(chatId) {
    socket.emit('typing', chatId);
}

function stopTyping(chatId) {
    socket.emit('stopTyping', chatId);
}

socket.on('typing', (username) => {
    console.log(`${username} is typing...`);
});

socket.on('stopTyping', (username) => {
    console.log(`${username} stopped typing.`);
});

// Send and receive messages
function sendMessage(chatId, message) {
    socket.emit('message', { chat: chatId, message: message });
}

socket.on('message', (data) => {
    console.log('New message:', data);
});

// Join and leave chats
function joinChat(chatId) {
    socket.emit('join', chatId);
}

function leaveChat(chatId) {
    socket.emit('leave', chatId);
}

// Create new chat
function createNewChat(participants) {
    socket.emit('new-chat', { participants: participants });
}
```
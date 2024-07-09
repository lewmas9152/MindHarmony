# Backend API and WebSocket Usage Guide

## Base URL
All API endpoints 6are accessible under the base URL:
```
http://<your-server-domain>:<port>
```

## API Endpoints

### Authentication
All requests requiring authentication must include the `Authorization` header:
```
Authorization: Token <your-token>
```

### Endpoints Overview

1. **Root Endpoint**
   - **GET `/`**
     - Response: `{ message: 'Hello User! This is an api :)' }`

2. **User Endpoints**
   - **GET `/me`**
     - Requires authentication.
     - Response: User details along with populated `groups` and `chats`.
     
   - **DELETE `/me`**
     - Requires authentication.
     - Deletes the authenticated user.
     - Response: Deleted user details.
   
   - **GET `/users/:id`**
     - Requires authentication.
     - Response: User details for the specified user ID.

3. **Group Endpoints**
   - **GET `/groups`**
     - Requires authentication.
     - Response: Groups the authenticated user is a member of.
   
   - **POST `/groups`**
     - Requires authentication.
     - Request Body: `{ name: 'Group Name' }`
     - Response: Created group details.
   
   - **GET `/groups/:id`**
     - Requires authentication.
     - Response: Group details for the specified group ID.
   
   - **DELETE `/groups/:id`**
     - Requires authentication.
     - Deletes the group if the authenticated user is an admin.
     - Response: "Group Deleted" or "Unauthorized".

4. **Message Endpoints**
   - **POST `/groups/:id/message`**
     - Requires authentication.
     - Request Body: `{ message: 'Your Message' }`
     - Response: Created chat details associated with the group.

## WebSocket Integration

### Connection
Establish a WebSocket connection to the server using Socket.IO:
```javascript
const socket = io('http://<your-server-domain>:<port>', {
    auth: {
        token: '<your-token>'
    }
});
```

### Event Handlers

1. **Connection Event**
   ```javascript
   socket.on('user', (user) => {
       console.log('Connected as user:', user);
   });
   ```

2. **Disconnection Event**
   ```javascript
   socket.on('disconnect', () => {
       console.log('Disconnected');
   });
   ```

3. **Join Chat**
   ```javascript
   socket.emit('join', chatId);
   ```

4. **Leave Chat**
   ```javascript
   socket.emit('leave', chatId);
   ```

5. **Send Message**
   ```javascript
   socket.emit('message', {
       chat: chatId,
       message: 'Your message here'
   });
   ```

6. **Receive Message**
   ```javascript
   socket.on('message', (message) => {
       console.log('New message:', message);
   });
   ```

### Example Workflow

1. **Authenticate the user** and obtain a token.
2. **Connect to the WebSocket** with the token.
3. **Fetch user details** using `GET /me`.
4. **Fetch user groups** using `GET /groups`.
5. **Join a chat** using the `join` event with the chat ID.
6. **Send and receive messages** within the joined chat.
7. **Leave the chat** when done using the `leave` event.
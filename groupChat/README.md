# Group Chat Service

## Usage

### Importing the socket.io library into your frontend
You can use the following to import socket.io into your project:
* For HTML
```
<script src="https://cdn.socket.io/4.7.5/socket.io.min.js" integrity="sha384-2huaZvOR9iDzHqslqwpR87isEmrfxqyWOF7hr7BY6KG0+hVKLoEXMPUJw3ynWuhO" crossorigin="anonymous"></script>
```
* For NPM
``` npm
npm install socket.io-client
```
For more details on importing and usage of socket.io, refer to https://socket.io/docs/v4/client-installation/

# Frontend Documentation for WebSocket Group Chat

## Overview

This documentation provides an overview of how to interact with the WebSocket server for the group chat application using Socket.IO on the frontend. It includes details on the events available and example usage.

## Connecting to the Server

To connect to the WebSocket server, initialize a Socket.IO client instance:

```javascript
const socket = io('http://localhost:3000'); //Replace this with the prod url
```

Replace `<your-port>` with the port number your server is running on.

## Events

### Server-Side Events

These events are emitted by the server and can be listened to by the client.

#### `info`
- **Description**: Provides informational messages such as user connections and disconnections.
- **Parameters**: 
  - `message` (String): The informational message.

  ```javascript
  socket.on('info', (message) => {
      console.log(message);
      // Display the message in the chat
  });
  ```

#### `stat`
- **Description**: Provides the current number of connected users.
- **Parameters**: 
  - `count` (Number): The number of connected users.

  ```javascript
  socket.on('stat', (count) => {
      console.log(`Number of users connected: ${count}`);
      // Update the user count display
  });
  ```

#### `message`
- **Description**: Delivers a new chat message.
- **Parameters**: 
  - `message` (String): The chat message.

  ```javascript
  socket.on('message', (message) => {
      console.log(`New message: ${message}`);
      // Display the message in the chat
  });
  ```

#### `typing`
- **Description**: Indicates that a user is typing.
- **Parameters**: 
  - `username` (String): The username of the user who is typing.

  ```javascript
  socket.on('typing', (username) => {
      console.log(`${username} is typing...`);
      // Show typing indicator
  });
  ```

### Client-Side Events

These events are emitted by the client to communicate with the server.

#### `new-user`
- **Description**: Notifies the server of a new user joining the chat.
- **Parameters**: 
  - `username` (String): The username of the new user.

  ```javascript
  const username = 'YourUsername';
  socket.emit('new-user', username);
  ```

#### `new-message`
- **Description**: Sends a new chat message to the server.
- **Parameters**: 
  - `message` (String): The chat message in JSON format.

  ```javascript
  const message = JSON.stringify([username, 'Hello, world!']);
  socket.emit('new-message', message);
  ```

#### `typing`
- **Description**: Notifies the server that the user is typing.
- **Parameters**: 
  - `username` (String): The username of the user who is typing.

  ```javascript
  socket.emit('typing', username);
  ```

## Example Usage

Below is an example of how you can set up the frontend to interact with the WebSocket server:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Group Chat</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const socket = io('http://localhost:<your-port>');
            
            const username = prompt('Enter your username:');
            socket.emit('new-user', username);
            
            socket.on('info', (message) => {
                console.log(message);
                // Display the message in the chat
            });

            socket.on('stat', (count) => {
                console.log(`Number of users connected: ${count}`);
                // Update the user count display
            });

            socket.on('message', (message) => {
                console.log(`New message: ${message}`);
                // Display the message in the chat
            });

            socket.on('typing', (username) => {
                console.log(`${username} is typing...`);
                // Show typing indicator
            });

            const messageInput = document.getElementById('message-input');
            const sendButton = document.getElementById('send-button');

            messageInput.addEventListener('input', () => {
                socket.emit('typing', username);
            });

            sendButton.addEventListener('click', () => {
                const message = JSON.stringify([username, messageInput.value]);
                socket.emit('new-message', message);
                messageInput.value = '';
            });
        });
    </script>
</head>
<body>
    <div id="chat">
        <!-- Chat messages will be displayed here -->
    </div>
    <input type="text" id="message-input" placeholder="Type a message...">
    <button id="send-button">Send</button>
</body>
</html>
```

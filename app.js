const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Load predefined responses asynchronously
let responses = {};

fs.readFile(path.join(__dirname, 'responses.json'), 'utf8')
  .then(data => {
    responses = JSON.parse(data);
  })
  .catch(err => {
    console.error("Error reading responses file:", err);
  });

// Render the main page
app.get('/chat', (req, res) => {
    res.render('index');
});

// Handle chat messages via WebSocket
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('chatMessage', (data) => {
        const userMessage = data.message.toLowerCase();
        const username = data.username;
        const response = responses[userMessage] || `Sorry, ${username}, I didn't understand that.`;
        socket.emit('botReply', response);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

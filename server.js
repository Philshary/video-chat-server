// server.js
const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
    path: '/myapp'
});

app.use('/peerjs', peerServer);

// Health check route for Render
app.get('/', (req, res) => {
    res.status(200).send('Signaling server is live.');
});
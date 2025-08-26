// server.js (Final Version with CORS)

const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors'); // Import the CORS package

const app = express();

// Use the CORS middleware. This tells the server to add the
// 'Access-Control-Allow-Origin' header to its responses.
app.use(cors());

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
    res.status(200).send('Signaling server is live and CORS is enabled.');
});

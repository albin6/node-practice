const express = require('express');
const cors = require('cors');
const app = express();

// Sample user data
const userData = {
    name: 'Jane Doe',
    age: 28,
};

// CORS configuration
app.use(cors({
    origin: 'http://localhost:4000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only specific headers
}));

// Route to get user data
app.get('/user/:id', (req, res) => {
    console.log('Request received on server');
    res.json(userData); // Respond with JSON data
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

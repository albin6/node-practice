const express = require('express');
const app = express();

// Route to fetch user data from the server
app.get('/get-user', async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/user/1');
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the client server
app.listen(3001, () => {
    console.log('Client running on http://localhost:3001');
});

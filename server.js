const express = require('express');
const app = express();
const PORT = 3000;

// Serve static frontend files from a 'public' directory
app.use(express.static('public'));

// Create an API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from your new Node.js Backend!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
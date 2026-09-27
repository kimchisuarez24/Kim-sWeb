const express = require('express');
const path = require('path');
const app = express();

// Tell Express to serve static files (HTML, CSS, Images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Explicitly tell the server to load index.html when someone visits the main URL ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// CRITICAL FOR VERCEL: Export the app so Vercel's serverless environment can use it
module.exports = app;

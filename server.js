const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, 'FrontEnd')));
app.use(express.static('FrontEnd/build'));

// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEnd', 'App.js'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

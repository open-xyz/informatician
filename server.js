require('./App.css');
const express = require('express');
const app = express();


app.get('./App.css', (req, res) => {
    res.send('Hello, World!');
  });

  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
    

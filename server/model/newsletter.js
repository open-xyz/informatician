const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/validate-email', (req, res) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  return res.json({ message: 'Email address is valid' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

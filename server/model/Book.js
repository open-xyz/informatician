const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/validate-book', (req, res) => {
  const { title, author, isbn } = req.body;

  if (!title || !author || !isbn) {
    return res.status(400).json({ error: 'Please provide all fields (title, author, isbn)' });
  }

  return res.json({ message: 'Book is valid' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'BookName must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'BookName cannot be empty',
    },
  },
  authorName: {
    type: String,
    in: ['body'],
    isLength: {
      options: { min: 3 },
      errorMessage: 'Name must be at least 3 characters long',
    },
    notEmpty: {
      errorMessage: 'author cannot be empty',
    },
  },
  publisher: {
    type: String,
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'Publisher must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Publisher cannot be empty',
    },
  },
  pages: {
    type: Number,
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'Number of pages must be at least 1  long',
    },
    notEmpty: {
      errorMessage: 'Number of pages cannot be empty',
    },
  },
  img: {
    type: String,
    default: '',
    required: [true, 'Image URL is required.'],
    notEmpty: {
        errorMessage: 'image cannot be empty',
      },
  },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

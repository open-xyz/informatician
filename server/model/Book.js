const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  bookName:{
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,   
  },
  publisher: {
    type: String,
    required: true,     
  },
  pages: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    default: "",
    required: true,
  },
  bookpdf: {
    type: String,
    default:"",
  },
  category:{
    type:String,
    default:"",
  }
},
{ timestamps: true })
const Book = mongoose.model("Book",bookSchema);
module.exports = Book
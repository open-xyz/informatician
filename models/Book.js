const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName : {
        type: String,
        required: true
    },

    bookGenre : {
        type: String,
        required: true
    },

    about : {
        type:String,
        required: true
    }
},{timestamps: true});

const Book = mongoose.model('book',bookSchema); 
module.exports = Book;
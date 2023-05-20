const express = require('express');
const Book = require('../models/Book');
const router = express.Router();



router.get('/add', async (req,res) => {
    // console.log('here');
    res.render('BookUploadForm');
});

router.post('/add',async (req,res) => {
    const book = new Book(req.body);

    book.save().then((result) => res.redirect('/')).catch(err => console.log(err));
})


module.exports = router;
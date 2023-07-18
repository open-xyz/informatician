const  checkAuth =require('../middleware/auth.middlware');

const { addBook, getAllBooks, getABook, updateBook, deleteBook,findbycategory } = require('../controller/book');

const router = require('express').Router();

router.post('/add', checkAuth, addBook);
router.get('/find', checkAuth, getAllBooks);
router.get('/:id', checkAuth, getABook);
router.put('/:id', checkAuth, updateBook);
router.delete('/:id', checkAuth, deleteBook);
router.get('/findbycategory/:category', checkAuth, findbycategory);

exports.router=router;

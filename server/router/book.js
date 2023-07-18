import { checkAuth } from '../middleware/auth.middleware';

const { addBook, getAllBooks, getABook, updateBook, deleteBook,findbycategory } = require('../controller/book');

const router = require('express').Router();

router.post( checkAuth, "/add", addBook)
router.get(checkAuth ,"/find", getAllBooks)
router.get(checkAuth ,"/:id", getABook)
router.put(checkAuth ,"/:id", updateBook)
router.delete(checkAuth,"/:id", deleteBook)
router.get(checkAuth ,"/findbycategory/:category",findbycategory)

exports.router=router;

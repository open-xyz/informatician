const { addBook, getAllBooks, getABook, updateBook, deleteBook } = require('../controller/book');

const router = require('express').Router();

router.post("/add", addBook)
router.get("/find", getAllBooks)
router.get("/:id", getABook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

exports.router=router;

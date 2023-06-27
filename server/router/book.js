const { addBook, getAllBooks, getABook, updateBook, deleteBook,findbycategory } = require('../controller/book');

const router = require('express').Router();

router.post("/add", addBook)
router.get("/find", getAllBooks)
router.get("/:id", getABook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)
router.get("/findbycategory/:category",findbycategory)

exports.router=router;

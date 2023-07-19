const  checkAuth =require('../middleware/auth.middlware');

const { addBook, getAllBooks, getABook, updateBook, deleteBook,findbycategory } = require('../controller/book');
const rateLimiter = require("express-rate-limit");

// Apply rate limiting middleware
const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP for 100 requests every minute
  message: "Rate limit exceeded, At the moment we only allow 100 requests per minute",
});
const router = require('express').Router();

router.post("/add", checkAuth, limiter, addBook);
router.get("/find", checkAuth, limiter, getAllBooks);
router.get("/:id", checkAuth, limiter, getABook);
router.put("/:id", checkAuth, limiter, updateBook);
router.delete("/:id", checkAuth, limiter, deleteBook);
router.get("/findbycategory/:category", checkAuth, limiter, findbycategory);


exports.router=router;

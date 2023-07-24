const checkAuth = require("../middleware/auth.middlware");

const {
  addBook,
  getAllBooks,
  getABook,
  updateBook,
  deleteBook,
  findbycategory,
} = require("../controller/book");
const rateLimiter = require("express-rate-limit");

// Apply rate limiting middleware
const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP for 100 requests every minute
  message:
    "Rate limit exceeded, At the moment we only allow 100 requests per minute",
});
const router = require("express").Router();

/**
 * @swagger
 * tags:
 *  name: Book
 *  description: Book section APIs
 *
 */

/**
 * @swagger
 *  components:
 *   schemas:
 *      addBook:
 *          type: object
 *          required:
 *              bookName
 *              autorName
 *              publisher
 *              img
 *              category
 *
 *          properties:
 *              bookName:
 *                  type: string
 *              autorName:
 *                  type: string
 *              publisher:
 *                  type: string
 *              img:
 *                  type: string
 *              category:
 *                  type: string
 *
 *      updateBook:
 *          type: object
 *          required:
 *              bookName
 *
 *          properties:
 *              bookName:
 *                  type: string
 */

/**
 * @swagger
 * /api/book/add:
 *  post:
 *      tags: ["Book"]
 *      summary: "Add a new book"
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/addBook"
 *
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          '201':
 *              description: "Book details added! Upload the book."
 *          '500':
 *              description: "Fill all the details! OR Fill all fields with valid data."
 */

router.post("/add", checkAuth, limiter, addBook);

/**
 * @swagger
 * /api/book/find:
 *  get:
 *      tags: ["Book"]
 *      summary: "Get All Books Data"
 *
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          '200':
 *              description: "Fetched all Books data"
 *          '500':
 *              description: "Internal Server Error"
 *
 */

router.get("/find", checkAuth, limiter, getAllBooks);

router.get("/key", (req, res) => {
  res.json({ apiKey: `${process.env.GOOGLE_API_KEY}` });
});

/**
 * @swagger
 * /api/book/:id:
 *  get:
 *      tags: ["Book"]
 *      summary: "Get Book By Id."
 *      security:
 *          - bearerAuth: []
 *
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *
 *      responses:
 *          '200':
 *              description: "Fetched Book by Id."
 *          '500':
 *              description: "Internal Server Error."
 */

router.get("/:id", checkAuth, limiter, getABook);

/**
 * @swagger
 * /api/book/:id:
 *  put:
 *      tags: ["Book"]
 *      summary: "Update Book Details."
 *      security:
 *          - bearerAuth: []
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/updateBook"
 *
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *
 *      responses:
 *          '200':
 *              description: "Book details has been updated!"
 *          '500':
 *              description: "Internal Server Error."
 */

router.put("/:id", checkAuth, limiter, updateBook);

/**
 * @swagger
 * /api/book/:id:
 *  delete:
 *      tags: ["Book"]
 *      summary: "Delete Book Details."
 *      security:
 *          - bearerAuth: []
 *
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *
 *      responses:
 *          '200':
 *              description: "Book details has been deleted!"
 *          '500':
 *              description: "Internal Server Error."
 */

router.delete("/:id", checkAuth, limiter, deleteBook);

/**
 * @swagger
 * /api/book/findbycategory/:category:
 *  get:
 *      tags: ["Book"]
 *      summary: "Find Books by category."
 *      security:
 *          - bearerAuth: []
 *
 *      parameters:
 *       - in: path
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *
 *      responses:
 *          '200':
 *              description: "Fetched Books by category!"
 *          '500':
 *              description: "Internal Server Error."
 */

router.get("/findbycategory/:category", checkAuth, limiter, findbycategory);

exports.router = router;

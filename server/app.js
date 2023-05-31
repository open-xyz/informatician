require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
const { sendNewsletter } = require("./controller/newsletter");
const mailRouter = require('./router/contact')
const notFound = require("./errors/customAPIError");
const errorHandler = require("./errors/customAPIError");
const newsLetter = require("./router/newsletter");
const rateLimiter = require("express-rate-limit");

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',newsLetter.router)
app.use('/sendMail',mailRouter)

const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, //limit each IP for 100 every minute
  message:
    "Rate limit exceeded, At the moment we only allow 100 requests per minute",
});

// Apply the rate limiter middleware to all requests
app.use(limiter);

cron.schedule("0 0 * * 0", sendNewsletter);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});

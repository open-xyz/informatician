require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require("node-cron");
const { sendNewsletter } = require("./controller/newsletter");
const newsLetter = require('./router/newsletter');
const mailRouter = require('./router/contact')

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("Database Connected");
}).catch((err) => {
  console.log(err);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',newsLetter.router)
app.use('/sendMail',mailRouter)

cron.schedule("0 0 * * 0", sendNewsletter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});

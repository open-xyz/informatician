const nodemailer = require("nodemailer");
const { Newsletter } = require("../model/newsletter");
const { createCustomError } = require('../errors/customAPIError');
const notFound = require("../error.js/notfound");

exports.addUser = async (req, res) => {
  try {
    const newUser = new Newsletter(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    return res.json(createCustomError('notFound',500));
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDEREMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.sendNewsletter = async () => {
  try {
    const result = await getBooks();
    const users = await Newsletter.find();
    const recipientEmails = users.map((user) => user.email);
    const info = await transporter.sendMail({
      from: `"" ${process.env.SENDEREMAIL}`,
      to: recipientEmails,
      subject: "New Enquiry",
      html: result.map((book) => {
        return `<h1>${book.name}</h1><p>${book.url}</p>`;
      }).join(""),
    });
  } catch (err) {
    console.error(err);
    return res.json(createCustomError(err));
  }
};

async function getBooks() {
  const url = "https://hapi-books.p.rapidapi.com/week/horror/5";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return res.json(createCustomError(error));
  }
}
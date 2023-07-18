import Newsletter from "@/model/Newsletter";
import nodemailer from "nodemailer";
import { connectedToDB } from "@/utils/database";
import fetch from "node-fetch";

export const POST = async (req, res) => {
  await connectedToDB();

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
      throw new Error(error.message);
    }
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDEREMAIL,
      pass: process.env.PASSWORD,
    },
  });

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

    res.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

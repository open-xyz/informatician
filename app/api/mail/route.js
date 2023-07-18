import mailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


export const POST = (req, res) => {
  console.log(req.body);

  let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GOOGLEAPPPASSWORD
    }
  });

  let options = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: "Contact Request",
    html: `
      <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: Contact Request</li>
          <li>Message: ${req.body.message}</li>
        </ul>
      </div>
    `
  };
  
  try {
    transporter.sendMail(options, function (error, info) {
      if (error) {
        console.error(error);
        res.status(500).json('Could not send Email');
      } else {
        console.log("Email Sent Successfully");
        res.status(200).json('Email Sent Successfully');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal Server Error');
  }
};

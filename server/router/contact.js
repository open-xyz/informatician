const  checkAuth  =require('../middleware/auth.middlware');

const express = require('express')
const mailer  = require('nodemailer')
const mailRouter = express.Router()
const dotenv  = require('dotenv').config()
const rateLimiter = require("express-rate-limit");

// Apply rate limiting middleware
const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP for 100 requests every minute
  message: "Rate limit exceeded, At the moment we only allow 100 requests per minute",
});
const router = require('express').Router();

mailRouter.post('/',  limiter ,(req, res) => {
    console.log(req.body)
    console.log("EMAIL:",process.env.GMAIL)
    console.log("PASSWORD:",process.env.GOOGLEAPPPASSWORD)
    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GOOGLEAPPPASSWORD
        }
    })

    var options = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: "Contact Request",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f3f3f3; padding: 20px;">
        <p style="color: #555; font-size: 18px;">You have a new contact request.</p>
        <h3 style="color: #007BFF;">Contact Details</h3>
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border: 2px solid #ccc; border-radius: 10px;">
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Name:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${req.body.name}</p>
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Email:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${req.body.email}</p>
         
          <p style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #007bff;">Message:</p>
          <p style="font-family: Verdana, sans-serif; font-size: 16px; color: #ff5733;">${req.body.message}</p>
        </div>
      </div>
    
    
        `
    }

    transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log(error)
            res.json('Couldnot send Email')
        }
        else {
            console.log("Email Sent Successfully")
            res.json('Email Sent Successfully')
        }

    });
})


module.exports = mailRouter;

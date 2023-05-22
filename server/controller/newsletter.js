const nodemailer = require('nodemailer');
const {Newsletter} = require('../model/newsletter')

exports.addUser = async(req,res)=>{
  try{
    const newUser = new Newsletter(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  }catch(err){
    console.log(err)
    res.status(500).json({
      message: "Already Exist"
    })
  }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDEREMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.sendNewsletter = async () => {
  try {
    const users = await Newsletter.find();
    const recipientEmails = users.map(user => user.email);
    console.log(recipientEmails);
    const info = await transporter.sendMail({
      from: `"" ${process.env.SENDEREMAIL}`,
      to: recipientEmails,
      subject: "New Enquiry",
      html: `<h1>hello</h1>`,
    });
  } catch (err) {
    console.error(err);
  }
};
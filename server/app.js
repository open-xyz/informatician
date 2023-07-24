require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
const { sendNewsletter } = require("./controller/newsletter");
const mailRouter = require("./router/contact");
const notFound = require("./errors/notfound");
const { customAPIError } = require("./errors/customAPTError");
const multer = require("multer");
const path = require("path");
const newsLetter = require("./router/newsletter");
const book = require("./router/book");
const rateLimiter = require("express-rate-limit");
const nodemailer = require("nodemailer");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, //limit each IP for 100 every minute
  message:
    "Rate limit exceeded, At the moment we only allow 100 requests per minute",
});

// swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Informatician APIs",
      version: "1.0.1",
      description: "Informatician APIs information",
      contact: {
        name: "Rohan",
      },
      servers: ["http://localhost:5000"],
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./router/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Apply the rate limiter middleware to all requests
app.use(limiter);

app.use(cors());
app.use(express.json());
app.use("/api/book", book.router);
app.use("/api", newsLetter.router);
app.use("/sendMail", mailRouter);

app.use(express.static(path.join(__dirname, "public/uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const uniqueFilename =
      file.originalname.replace(fileExtension, "") +
      "-" +
      uniqueSuffix +
      fileExtension;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  console.log(req);
  console.log(req.file);
  try {
    return res.status(201).json("PDF uploaded successfully");
  } catch (err) {
    console.log(err);
  }
});

app.post("/send-email", (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "your_email_service_provider",
    auth: {
      user: "your_email@example.com",
      pass: "your_email_password",
    },
  });

  const mailOptions = {
    from: "your_email@example.com",
    to: email,
    subject: "Subscription Confirmation",
    text: "Thank you for subscribing to our newsletter!",
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent");
    }
  });
});
app.get('/ClientId',(req,res)=>{
  res.json({clientid: `${process.env.GOOGLE_CLIENT_ID}`});
})

cron.schedule("0 0 * * 0", sendNewsletter);

// Error handling
app.use(notFound);
app.use(customAPIError);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Started at port ${process.env.PORT}`);
});

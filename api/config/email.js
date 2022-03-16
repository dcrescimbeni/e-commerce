const nodemailer = require("nodemailer");
require('dotenv').config()

exports.transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.GOOGLE_MAIL_MAIL,
    pass: process.env.GOOGLE_MAIL_PASS
  }
});


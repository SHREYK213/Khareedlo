// email.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (to, subject, text) => {
  // Implement your logic to send an email using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shreyaspoojary240@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "shreyaspoojary240@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = {
  sendMail,
};

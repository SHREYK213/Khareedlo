// otpController.js
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const otpMiddleware = require("../middleware/otp");
const { Op } = require("sequelize");


const Users = db.users;

const verifyOtp = async (req, res) => {
  try {
      const { email, otp } = req.body;

      const user = await Users.findOne({
          where: {
              email: email,
              otpExpiration: {
                  [Op.gt]: new Date(),
              },
          },
      });

      if (!email || !otp) {
          return res.status(400).send("Email and OTP are required");
      }

      if (!user) {
          return res.status(404).send("User not found");
      }

      // Check if OTP matches and is not expired using the OTP middleware
      const isOtpValid = await otpMiddleware.verifyAuthOTP(otp, user.otp, user.otpExpiration);

      if (!isOtpValid) {
          return res.status(401).send("Invalid email, password, or OTP");
      }
      
      if(isOtpValid){
        await Users.update({ isVerified: true }, { where: { id: user.id } });
        return res.status(200).send("OTP verified");
      }
      // Clear the OTP in the database after successful verification
      await Users.update({ otp: null, otpExpiration: null }, { where: { id: user.id } });

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);

      // Set token in cookie (optional)
      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });

      console.log("User OTP verified:", JSON.stringify(user, null, 2));
      console.log("New Token:", token);

      return res.status(200).send({ user, token });
  } catch (error) {
      console.error("Error during OTP verification:", error.message);
      return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  verifyOtp,
};

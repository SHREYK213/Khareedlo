// otpController.js
const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const otpMiddleware = require("../../middleware/verification/otpMiddleware");
const { Op } = require("sequelize");
const { sendMail } = require("../../utils/email/email");

const Users = require("../../models/users/userModel");

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
          return res.status(401).send("Invalid OTP");
      }
      
      if(isOtpValid){
        await Users.update({ isVerified: true }, { where: { user_Id: user.user_Id } });
        await Users.update({ otp: null, otpExpiration: null }, { where: { user_Id: user.user_Id } });
        return res.status(200).json({message:"OTP verified"});
      }

      const token = jwt.sign({ id: user.user_Id }, process.env.SECRET_KEY);

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

const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    let user = await Users.findOne({
      where: {
        email: email,
        isVerified: false, // Ensure the user is not already verified
      },
    });

    if (!user) {
      return res.status(404).send("User not found or already verified");
    }

    // Generate a new OTP, hash it, and set the expiration
    const ogOtp = otpMiddleware.generateOTP();
    const otp = await bcrypt.hash(ogOtp, 10);
    const otpExpiration = otpMiddleware.setOTPExpiration();
    const data = {
      otp,
      otpExpiration,
    };

    await Users.update(data, {
      where: {
        user_Id: user.user_Id,
      },
    });

    // Fetch the updated user data after the update
    user = await Users.findByPk(user.user_Id);

    if (user) {
      sendMail(user.email, "Resend OTP", `Your new OTP is: ${ogOtp}`);
      return res.status(201).json({ message: "New OTP sent for verification" });
    } else {
      return res.status(409).send("There was an error while updating user data");
    }
  } catch (error) {
    console.error("Error during OTP resend:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  verifyOtp,
  resendOtp
};

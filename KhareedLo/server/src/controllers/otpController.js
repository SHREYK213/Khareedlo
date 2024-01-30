// otpController.js

const db = require("../models");
const jwt = require("jsonwebtoken");
const otpMiddleware = require("../middleware/otp");
const { Op } = require("sequelize");


const Users = db.users;

const verifyOtp = async (req, res) => {
    try {
        const { email, password, otp } = req.body;

        const user = await Users.findOne({
            where: {
              email: email,
              otpExpiration: {
                [Op.gt]: new Date(), // Check if OTP is not expired
              },
            },
          });
        
        if (!email || !otp) {
            return res.status(400).send("Email and OTP are required");
        }
        
        // Retrieve user from the database
    //     const user = await Users.findOne({
    //         where: {
    //             email: email,
    //         },
    // });

    if (!user) {
        return res.status(404).send("User not found");
    }
    console.log("Input OTP:", otp);
    console.log("Stored OTP:", user.otp);
    console.log("OTP Expiration (DB):", user.otpExpiration);
    console.log("Current Timestamp:", new Date().toISOString());
    
    // Check if OTP matches and is not expired using the OTP middleware
    const isOtpValid = otpMiddleware.verifyOTP(otp, user.otp, user.otpExpiration);
    console.log("Is OTP Valid?", isOtpValid);

    if (!user || !otpMiddleware.verifyOTP(otp, user.otp, user.otpExpiration)) {
        return res.status(401).send("Invalid email, password, or OTP");
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

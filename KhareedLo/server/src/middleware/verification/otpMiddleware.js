const crypto = require("crypto");
const bcrypt = require("bcrypt");

const generateOTP = () => {
  // Generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// In your otpMiddleware.js
const setOTPExpiration = () => {
  // Set OTP expiration to 2 minutes from now in UTC
  const expiration = new Date();
  expiration.setUTCMinutes(expiration.getUTCMinutes() + 1);
  return expiration.toISOString();
};


const verifyAuthOTP = async (otp, storedHashedOTP, expiration) => {
  const isDynamicOtpValid = await bcrypt.compare(otp, storedHashedOTP);
  const isHardcodedOtpValid = otp === process.env.HARDCODED_OTP; // Replace with your actual hardcoded OTP

  return (isDynamicOtpValid || isHardcodedOtpValid) && new Date() < new Date(expiration);
};
module.exports = {
  generateOTP,
  setOTPExpiration,
  verifyAuthOTP,
};

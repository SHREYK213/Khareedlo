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
  expiration.setUTCMinutes(expiration.getUTCMinutes() + 2);
  return expiration.toISOString();
};


const verifyOTP = (otp, storedOTP, expiration) => {
  // Check if OTP matches and is not expired
  return otp == storedOTP && new Date() < new Date(expiration);
};

module.exports = {
  generateOTP,
  setOTPExpiration,
  verifyOTP,
};

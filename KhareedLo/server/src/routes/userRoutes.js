const express = require("express");
const bcrypt = require("bcrypt");
const userAuth = require("../middleware/userAuth.js");
const userController = require('../controllers/userController.js')
const{ authenticateToken } = require('../middleware/userAuth.js');
const { verifyOtp } = require("../controllers/otpController.js");
const { register,login } = userController


const router = express.Router();

router.post('/register', userAuth.saveUser, register)
router.post("/login", login);
router.post("/otpVerify", verifyOtp);

// Protected route (example usage of authentication middleware)
router.get("/protected", authenticateToken, (req, res) => {
  res.status(200).send(`Hello ${req.user.name}! This is a protected route.`);
});

module.exports = router;
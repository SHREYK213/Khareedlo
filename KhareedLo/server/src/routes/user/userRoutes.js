const express = require("express");
const bcrypt = require("bcrypt");
const userAuth = require("../../middleware/user/userAuthMiddleware.js");
const userController = require('../../controllers/user/userController.js')
const{ authenticateToken} = require('../../middleware/user/userAuthMiddleware.js');
const { verifyOtp, resendOtp } = require("../../controllers/verification/otpController.js");
const { register,login,getUsers } = userController


const router = express.Router();

router.post('/register', userAuth.saveUser, register)
router.post("/login", login);
router.post("/otpVerify", verifyOtp);
router.post('/resendOtp',resendOtp);
router.get('/getUsers',getUsers);

// Protected route (example usage of authentication middleware)
router.get("/protected", (req, res) => {
  res.status(200).send(`Hello ${req.user.name}! This is a protected route.`);
});

module.exports = router;
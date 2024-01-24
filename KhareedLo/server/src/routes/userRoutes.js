const express = require("express");
const bcrypt = require("bcrypt");
const userAuth = require("../middleware/userAuth.js");
const userController = require('../controllers/userController.js')
const { register} = userController


const router = express.Router();

// router.post("/register", async (req, res) => {
//   const { name, email, phone_number, date_of_birth, username, password_hash } =
//     req.body;

//   const hashedPassword = await bcrypt.hash(password_hash, 10);

//   try {
//     let result = await pool.query(
//       "INSERT INTO users (name,email,phone_number,date_of_birth,username,password_hash) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
//       [name, email, phone_number, date_of_birth, username, hashedPassword]
//     );
//     res.json(result.rows[0]);
//     res.status(200).send("User Registered Successfully");
//   } catch (error) {
//     console.error('Error Registering User',error.message);
//     res.status(500).send("Server Error");
//   }
// });

router.post('/register', userAuth.saveUser, register)

module.exports = router;
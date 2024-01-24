const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

const Users = db.users;

const register = async (req, res) => {
  try {
    const { name, email, phone_number, date_of_birth, password } = req.body;
    // Using bcrypt to hash the password with automatically generated salt
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
      name,
      email,
      phone_number,
      date_of_birth,
      password_hash: hashedPassword,
    };

    // Saving the user
    const user = await Users.create(data);

    if (user) {
      // Generate token with the user's id and the secretKey from the env file
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      // Set cookie with the generated token
      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });

      console.log("User", JSON.stringify(user, null, 2));
      console.log("Token", token);

      // Send user details
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.error("Error during registration:", error.message);
    // Send an appropriate error response to the client
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  register,
};

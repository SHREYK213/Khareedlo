const express = require("express");

const db = require("../../models");

const Users = require("../../models/users/userModel");

const saveUser = async (req, res, next) => {

    try {
        console.log(req.body.name);
        console.log(req.body.email);
        // const userName = await Users.findOne({
        //     where: {
        //         name: req.body.name
        //     }
        // });
        // console.log(req.body.name);

        // if (userName) {
        //     console.log(`User with name ${req.body.name} already exists.`);
        //     return res.status(409).send("User already exists");
        // }

        const email = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        if (email) {
            console.log(`User with email ${req.body.email} already exists.`);
            return res.status(409).send("Email already exists");
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// const authenticateToken = async (req, res, next) => {
//     try {
//       const authHeader = req.headers['authorization'];
//       const token = authHeader && authHeader.split(' ')[1];
  
//       if (!token) {
//         return res.status(401).send("Unauthorized: Missing token");
//       }
  
//       // Verify the token
//       jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
//         if (err) {
//           return res.status(403).send("Forbidden: Invalid token");
//         }
  
//         // Check if the user exists in the database
//         const existingUser = await Users.findByPk(user.id);
  
//         if (!existingUser) {
//           return res.status(403).send("Forbidden: User not found");
//         }
  
//         // Attach the user to the request object for use in subsequent middleware or route handlers
//         req.user = existingUser;
  
//         // Continue to the next middleware or route handler
//         next();
//       });
//     } catch (error) {
//       console.error("Error during token verification:", error.message);
//       return res.status(500).send("Internal Server Error");
//     }
// };


module.exports = {
    saveUser,
    // authenticateToken
};

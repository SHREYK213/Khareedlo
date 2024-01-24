const express = require("express");

const db = require("../models");

const Users = db.users;

const saveUser = async (req, res, next) => {

    try {
        console.log(req.body.name);
        console.log(req.body.email);
        const userName = await Users.findOne({
            where: {
                name: req.body.name
            }
        });
        console.log(req.body.name);

        if (userName) {
            console.log(`User with name ${req.body.name} already exists.`);
            return res.status(409).send("User already exists");
        }

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

module.exports = {
    saveUser,
};

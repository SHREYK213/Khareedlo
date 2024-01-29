const db = require("../models");

const Forms = db.forms;

const createForm = async (req, res) => {
    try {
        const { name, hasDropdown, inputAllowed } = req.body;

    if(!name){
        return res.status(400).send("Invalid form");
    }

    const data = {
        name,
        hasDropdown,
        inputAllowed
    }

    const form = await Forms.create(data)

    if(form) {
        return res.status(201).send(form);
    }else{
        return res.status(409).send("Details are not correct");
    }
    } catch (error) {
        console.error("Error during registration:", error.message);
        return res.status(500).send("Internal Server Error");
    }
}

const getForms = async (req, res) => {
        try {
          const forms = await Forms.findAll();
          return res.status(200).json(forms);
        } catch (error) {
          console.error('Error fetching forms:', error.message);
          return res.status(500).send('Internal Server Error');
        }
      };


module.exports = { createForm, getForms }
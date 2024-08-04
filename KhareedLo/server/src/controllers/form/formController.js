const db = require("../../models");

const Forms = require("../../models/utility/formModel.js");

const createForm = async (req, res) => {
  try {
    const formsData = req.body;

    if (!Array.isArray(formsData)) {
      return res.status(400).send("Invalid data format. Expected an array.");
    }

    const createdForms = [];

    for (const formData of formsData) {
      const { name, hasDropdown, inputAllowed } = formData;

      if (!name) {
        return res.status(400).send("Invalid form data: name is required.");
      }

      const form = await Forms.create({ name, hasDropdown, inputAllowed });
      createdForms.push(form);
    }

    return res.status(201).send(createdForms);
  } catch (error) {
    console.error("Error during form creation:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};
const getForms = async (req, res) => {
  try {
    const forms = await Forms.findAll();
    return res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { createForm, getForms };

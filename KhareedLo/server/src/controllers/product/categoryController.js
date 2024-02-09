const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");

const Category = require("../../models/products/categoryModel.js");


const addCategory = async (req, res) => {
    try {
        const categoryData = req.body; // Array of category names
        
        if (!Array.isArray(categoryData) || categoryData.length === 0) {
            return res.status(400).send("Category data required as an array");
        }
  
        const createdCategory = await Promise.all(categoryData.map(async (category) => {
            const { category_name, description } = category;
            if (!category_name || !description) {
                throw new Error("Category and description name is required");
            }
            return Category.create({ category_name,description });
        }));
  
        return res.status(201).json({ createdCategory });
    } catch (error) {
        console.error("Error during Category creation:", error.message);
        return res.status(500).send("Internal Server Error");
    }
  };

  const getCategory = async (req, res) => {
    try {
      const category = await Category.findAll();
      return res.status(200).json({ category });
    } catch (error) {
      console.error("Error while fetching category:", error.message);
      return res.status(500).send("Internal Server Error");
    }
  };

  module.exports = {
    addCategory,
    getCategory
}
const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");

const Brand = require("../../models/products/brandModel.js");

const addBrands = async (req, res) => {
  try {
      const brandsData = req.body;
      
      if (!Array.isArray(brandsData) || brandsData.length === 0) {
          return res.status(400).send("Brand data required as an array");
      }

      const createdBrands = await Promise.all(brandsData.map(async (brand) => {
          const { brand_name } = brand;
          if (!brand_name) {
              throw new Error("Brand name is required");
          }
          return Brand.create({ brand_name });
      }));

      return res.status(201).json({ createdBrands });
  } catch (error) {
      console.error("Error during brand creation:", error.message);
      return res.status(500).send("Internal Server Error");
  }
};

const getBrands = async (req, res) => {
    try {
      const brands = await Brand.findAll();
      return res.status(200).json({ brands });
    } catch (error) {
      console.error("Error while fetching brands:", error.message);
      return res.status(500).send("Internal Server Error");
    }
  };

module.exports = {
    addBrands,
    getBrands
};

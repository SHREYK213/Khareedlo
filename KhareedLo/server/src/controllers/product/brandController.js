const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const Image = require("../../models/images/imageModel.js");
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

  const getBrandById = async (req, res) => {
    try {
        const { brand_Id } = req.params;
        const brand = await Brand.findOne({
            where: { brand_Id },
        });

        if (!brand) {
            return res.status(404).json({ error: "Brand not found" });
        }

        const images = await Image.find({ brand_Id });
        const brandWithImages = {
            brand: brand.toJSON(),
            images
        };
        return res.status(200).json(brandWithImages);
    } catch (error) {
        console.error("Error while fetching brand:", error.message);
        return res.status(500).send("Internal Server Error");
    }
};


const getAllBrandsWithImages = async (req, res) => {
    try {
        // Step 1: Fetch all products from PostgreSQL
        const brands = await Brand.findAll({

        });

        if (!brands || brands.length === 0) {
            return res.status(404).json({ error: "No brands found" });
        }

        // Step 2: Fetch images for each product from MongoDB
        const brandsWithImages = await Promise.all(brands.map(async (brand) => {
            const { brand_Id } = brand;
            const images = await Image.find({ brand_Id });
            return {
                brand: brand.toJSON(),
                images
            };
        }));

        // Step 3: Send the response
        res.status(200).json(brandsWithImages);

    } catch (error) {
        console.error("Error while fetching brands:", error.message);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    addBrands,
    getBrands,
    getBrandById,
    getAllBrandsWithImages
};

const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");

const Product = db.products;
const Brand = db.brands;
const Category = db.category;

const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        
        if (!Array.isArray(productData) || productData.length === 0) {
            return res.status(400).send("Product data required as an array");
        }
  
        const createdProduct = await Promise.all(productData.map(async (product) => {
            const { product_name, description, price, categoryId, brandId } = product;
            if (!product_name || !description || !price || !categoryId || !brandId) {
                throw new Error("Give all required fields");
            }
            return Product.create({ product_name,description,price,categoryId,brandId });
        }));
  
        return res.status(201).json({ createdProduct });
    } catch (error) {
        console.error("Error during Product creation:", error.message);
        return res.status(500).send("Internal Server Error");
    }
  };

  const getProduct = async (req, res) => {
        try {
          const product = await Product.findAll();
          return res.status(200).json({ product });
        } catch (error) {
          console.error("Error while fetching product:", error.message);
          return res.status(500).send("Internal Server Error");
        }
      };

  module.exports={
    addProduct,
    getProduct
  }

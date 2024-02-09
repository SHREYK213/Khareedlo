const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const Image = require("../../models/images/imageModel");
const Product = require("../../models/products/productModel");
const Brand = require("../../models/products/brandModel");
const Category = require("../../models/products/categoryModel");

const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        
        if (!Array.isArray(productData) || productData.length === 0) {
            return res.status(400).send("Product data required as an array");
        }
  
        const createdProduct = await Promise.all(productData.map(async (product) => {
            const { product_name, description, price, category_Id, brand_Id } = product;
            if (!product_name || !description || !price || !category_Id || !brand_Id) {
                throw new Error("Give all required fields");
            }
            return Product.create({ product_name,description,price,category_Id,brand_Id });
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

    //   const getProductById = async (req, res) => {
    //     try {
    //         const { product_Id } = req.params;
    //         const product = await Product.findOne({
    //             where: { product_Id },
    //             include: [
    //                 { model: Category, attributes: ['category_Id', 'category_name','description'] },
    //                 { model: Brand, attributes: ['brand_Id', 'brand_name'] }
    //             ]
    //         });
    
    //         if (!product) {
    //             return res.status(404).json({ error: "Product not found" });
    //         }
    
    //         return res.status(200).json({ product });
    //     } catch (error) {
    //         console.error("Error while fetching product:", error.message);
    //         return res.status(500).send("Internal Server Error");
    //     }
    // };

    const getProductById = async (req, res) => {
        try {
            const { product_Id } = req.params;
            const product = await Product.findOne({
                where: { product_Id },
                include: [
                    { model: Category, attributes: ['category_Id', 'category_name', 'description'] },
                    { model: Brand, attributes: ['brand_Id', 'brand_name'] }
                ]
            });
    
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
    
            const images = await Image.find({ product_Id });
            const productWithImages = {
                product: product.toJSON(),
                images
            };
            return res.status(200).json(productWithImages);
        } catch (error) {
            console.error("Error while fetching product:", error.message);
            return res.status(500).send("Internal Server Error");
        }
    };
    
    module.exports = {
        addProduct,
        getProduct,
        getProductById
    };
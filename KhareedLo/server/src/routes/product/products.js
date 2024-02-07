const express = require("express");
// const bcrypt = require("bcrypt");
const { addBrands,getBrands } = require('../../controllers/product/brandController.js')
const { addCategory,getCategory } = require('../../controllers/product/categoryController.js')
const { addProduct,getProduct, getProductById } = require('../../controllers/product/productController.js')

const router = express.Router();

//brand
router.post('/addBrand',addBrands)
router.get('/getBrands',getBrands)

//category
router.post('/addCategory',addCategory)
router.get('/getCategory',getCategory)

//product
router.post('/addProducts',addProduct)
router.get('/getProducts',getProduct)
router.get('/getProductsById/:product_Id',getProductById)

module.exports = router;

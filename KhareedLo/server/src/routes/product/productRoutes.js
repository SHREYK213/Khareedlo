const express = require("express");
// const bcrypt = require("bcrypt");
const { addBrands,getBrands, getBrandById, getAllBrandsWithImages } = require('../../controllers/product/brandController.js')
const { addCategory,getCategory } = require('../../controllers/product/categoryController.js')
const { addProduct,getProduct, getProductById, getAllProductsWithImages } = require('../../controllers/product/productController.js')

const router = express.Router();

//brand
router.post('/addBrand',addBrands)
router.get('/getBrands',getBrands)
router.get('/getBrandsById/:brand_Id',getBrandById)
router.get('/getAllBrands',getAllBrandsWithImages)

//category
router.post('/addCategory',addCategory)
router.get('/getCategory',getCategory)

//product
router.post('/addProducts',addProduct)
router.get('/getProducts',getProduct)
router.get('/getProductsById/:product_Id',getProductById)
router.get('/getAllProducts',getAllProductsWithImages)

module.exports = router;

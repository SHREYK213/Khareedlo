const express = require("express");
// const bcrypt = require("bcrypt");
const { addBrands,getBrands } = require('../../controllers/product/brandController.js')


const router = express.Router();
router.post('/addBrand',addBrands)
router.get('/getBrands',getBrands)

module.exports = router;

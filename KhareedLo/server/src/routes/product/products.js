const express = require("express");
const bcrypt = require("bcrypt");
const { addBrands } = require('../../controllers/product/brandController.js')


const router = express.Router();
router.post('/addBrand',addBrands)

module.exports = router;

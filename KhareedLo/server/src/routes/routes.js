const express = require("express");
const userRoutes = require('../routes/user/userRoutes.js');
const formRoutes = require('../routes/utility/formRoutes.js');
const { addBrands } = require("../controllers/product/brandController.js");
const router = express.Router();



router.use('/api/users', userRoutes);
router.use('api/forms', formRoutes);
router.use('/api/products', addBrands);

module.exports = router;

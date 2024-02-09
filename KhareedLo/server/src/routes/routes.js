const express = require("express");
const userRoutes = require('../routes/user/userRoutes.js');
const formRoutes = require('../routes/utility/formRoutes.js');
const productRoutes= require("../routes/product/productRoutes.js");
const imageRoutes= require("../routes/utility/imageRoutes.js");
const router = express.Router();



router.use('/api/users', userRoutes);
router.use('/api/forms', formRoutes);
router.use('/api/products', productRoutes);
router.use('/api/images', imageRoutes);

module.exports = router;

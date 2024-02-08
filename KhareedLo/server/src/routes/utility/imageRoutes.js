const express = require('express');
const uploadMiddleware = require('../../middleware/utility/multer');
const {uploadLogo, viewLogo, uploadImage, viewImage} = require('../../controllers/utility/imageController');

const router = express.Router();

// POST endpoint for file upload
router.post('/upload-logo', uploadMiddleware, uploadLogo);
router.post('/upload-image', uploadMiddleware, uploadImage);
router.get('/logo/:entityId', viewLogo);
router.get('/image/:entityId', viewImage);


module.exports = router;

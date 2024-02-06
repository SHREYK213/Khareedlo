const express = require('express');
const uploadMiddleware = require('../../middleware/utility/multer');
const {uploadLogo, viewLogo} = require('../../controllers/utility/imageController');

const router = express.Router();

// POST endpoint for file upload
router.post('/upload-logo', uploadMiddleware, uploadLogo);
router.get('/logo/:entityId', viewLogo);


module.exports = router;

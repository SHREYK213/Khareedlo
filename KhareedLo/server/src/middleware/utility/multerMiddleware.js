const multer = require('multer');

// Set up Multer middleware
const upload = multer({
  limits: {
    fileSize: 1000000, // 1MB limit
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error('Please upload an image with a valid extension (jpeg, jpg, png)'));
    }
    cb(undefined, true);
  },
});

// Middleware function to handle file upload
const uploadMiddleware = upload.single('image'); // 'image' should match the field name in your form

module.exports = uploadMiddleware;

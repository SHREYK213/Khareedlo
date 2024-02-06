const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  entityId: {
    type: String,
    required: true,
  },
  entityType: {
    type: String,
    enum: ['Product', 'Brand'],
    required: true,
  },
  image: {
    type: Buffer, // or use GridFS for larger images
    required: false,
  },
  logo: {
    type: Buffer, // or use GridFS for larger thumbnails
    required: false,
  },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
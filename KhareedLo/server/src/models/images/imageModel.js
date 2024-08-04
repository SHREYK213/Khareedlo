const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  entityId: {
    type: Number,
    required: true,
    unique: true,
  },
  entityType: {
    type: String,
    enum: ['Product', 'Brand'],
    required: true,
  },
  imageType : {
    type: String,
    enum: ['image', 'logo'],
    required: true,
  },
  image: {
    type: Buffer,
    required: false,
  },
  brand_Id: {
    type: Number,
    ref: 'Brand',
  },
  product_Id: {
    type: Number,
    ref: 'Product',
  },
}, { timestamps: true });

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
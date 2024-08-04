const Logo = require('../../models/images/imageModel'); // Assuming your model is in a 'models' directory
const Image = require('../../models/images/imageModel'); // Assuming your model is in a 'models' directory
const mongoose = require('mongoose');

// Controller function to handle file upload
const uploadLogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Please upload an image file.');
    }
    console.log('EntityId from request:', req.body.entityId);

    const newLogo = new Logo({
      brand_Id: req.body.brand_Id,
      entityId: req.body.entityId,
      entityType: req.body.entityType,
      image: req.file.buffer,
      imageType: req.body.imageType,
    });

    await newLogo.save();

    res.status(201).send('Image uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Please upload an image file.');
    }
    console.log('EntityId from request:', req.body.entityId);

    const newImage = new Image({
      product_Id: req.body.product_Id,
      entityId: req.body.entityId,
      entityType: req.body.entityType,
      image: req.file.buffer,
      imageType: req.body.imageType,
    });

    await newImage.save();

    res.status(201).send('Image uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};



const viewLogo = async (req, res) => {
  try {
    const entityId = req.params.entityId;
    const image = await Logo.findOne({ entityId });

    if (!image) {
      return res.status(404).send('Image not found.');
    }

    res.set('Content-Type', 'image/jpeg');
    res.send(image.image);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const viewImage = async (req, res) => {
  try {
    const entityId = req.params.entityId;
    const image = await Image.findOne({ entityId });

    if (!image) {
      return res.status(404).send('Image not found.');
    }

    res.set('Content-Type', 'image/jpeg');
    res.send(image.image);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  uploadLogo,
  viewLogo,
  uploadImage,
  viewImage
};

const Logo = require('../../models/images/images'); // Assuming your model is in a 'models' directory
const mongoose = require('mongoose');

// Controller function to handle file upload
const uploadLogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Please upload an image file.');
    }
    console.log('EntityId from request:', req.body.entityId);

    const newLogo = new Logo({
      entityId: req.body.entityId,
      entityType: req.body.entityType,
      logo: req.file.buffer,
    });

    await newLogo.save();

    res.status(201).send('Image uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


const viewLogo = async (req, res) => {
  try {
    const entityId = req.params.entityId;
    const logo = await Logo.findOne({ entityId });

    if (!logo) {
      return res.status(404).send('Image not found.');
    }

    res.set('Content-Type', 'image/jpeg');
    res.send(logo.logo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {uploadLogo, viewLogo};

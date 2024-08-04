const express = require('express');
const { Form } = require('../../models');
const { createForm,getForms } = require('../../controllers/form/formController');

const router = express.Router();


  router.get('/allForms', getForms)

  router.post('/createForm', createForm)

  module.exports = router;
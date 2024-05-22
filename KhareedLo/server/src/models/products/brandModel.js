const Image = require('../images/imageModel');
const { Sequelize } = require("sequelize");
const db = require("../index")
const Brand = db.define('brands', {
  brand_Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  brand_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, { timestamps: true });


// db.sync({ alter: true })
module.exports = Brand
// const Products = require('./products');

// module.exports = (sequelize, DataTypes) => {
//   const Brand = sequelize.define('brands', {
//     brand_Id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     brand_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   }, { timestamps: true });

//     Brand.hasMany(Products, { foreignKey: 'brand_Id',sourceKey: 'brand_Id' });

//     return Brand;
// };

// const Products = require('./products');
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
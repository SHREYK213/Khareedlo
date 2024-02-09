
// const Products = require('./products');
// module.exports = (sequelize, DataTypes) => {
//   const Category = sequelize.define('category', {
//     category_Id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     category_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   }, { timestamps: true });

//     Category.hasMany(Products, { foreignKey: 'category_Id', sourceKey: 'category_Id' });

//   return Category;
// };

const { Sequelize } = require("sequelize");
const db = require("../index");
const Category = db.define('category', {
      category_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }, { timestamps: true });

// db.sync({ alter: true })



module.exports = Category
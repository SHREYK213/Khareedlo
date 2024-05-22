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
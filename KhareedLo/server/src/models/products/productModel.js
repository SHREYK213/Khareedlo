const db=require("../index")
const { Sequelize } = require("sequelize");
const Product = db.define('products', {
  product_Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category_Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  brand_Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

const Brand = require("./brandModel")
const Category = require("./categoryModel")
Brand.hasMany(Product, { foreignKey: 'brand_Id' });
Product.belongsTo(Brand, { foreignKey: 'brand_Id' }); // Add this association

Category.hasMany(Product, { foreignKey: 'category_Id' });
Product.belongsTo(Category, { foreignKey: 'category_Id' });
// db.sync({ alter: true })
module.exports=Product;
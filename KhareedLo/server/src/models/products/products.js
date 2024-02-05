module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('products', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: 'brandId' });
    Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };

  return Product;
};

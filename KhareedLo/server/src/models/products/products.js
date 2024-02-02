module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      description : {
        type: DataTypes.STRING,
        allowNull: false,
        required:false
      },
      price : {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
      },
      image:{
        type: DataTypes.STRING,
        allowNull: false,
        required:false
      }
    })
return Products
}
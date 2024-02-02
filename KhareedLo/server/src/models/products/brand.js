module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('brands', {
      brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      }
    },{ timestamps: true },
    )
    return Brand
}
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('brands', {
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // brand_logo: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  }, { timestamps: true });

  Brand.associate = (models) => {
    Brand.hasMany(models.Products, { foreignKey: 'brandId' });
  };

  return Brand;
};

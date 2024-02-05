module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: true });

  Category.associate = (models) => {
    Category.hasMany(models.Products, { foreignKey: 'categoryId' });
  };

  return Category;
};

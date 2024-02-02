module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        required: false,
      },
    },
    { timestamps: true }
  );
  return Category;
};

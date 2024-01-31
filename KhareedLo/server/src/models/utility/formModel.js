module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define("form", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasDropdown: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    inputAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });

  return Form;
};

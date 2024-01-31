module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('brands', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
    })}
// models/userModel.js
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        required: true,
        validate: {
          isEmail: true,
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^\d{10,}$/,
        },
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          isDate: true,
          isInThePast: function (value) {
            if (new Date(value) >= new Date()) {
              throw new Error('Date of birth must be in the past.');
            }
          },
          // Add more validations if necessary
        },
      },
      password_hash: {
        required: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      otp: {
        type:DataTypes.STRING,
        default:null
      },
      otpExpiration: {
        type:DataTypes.STRING,
        default:null
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    }, { timestamps: true });

    Users.beforeCreate(async (user) => {
      if (user.otp) {
          user.otp = await bcrypt.hash(user.otp, 10);
      }
  });
    return Users;
  };
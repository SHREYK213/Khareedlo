// models/userModel.js
const bcrypt = require("bcrypt");
const { Sequelize } = require("sequelize");
const db = require("../index")
const Users = db.define('users', {
  user_Id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    required: true,
    validate: {
      isEmail: true,
    },
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      is: /^\d{10,}$/,
    },
  },
  date_of_birth: {
    type: Sequelize.DATEONLY,
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
    type: Sequelize.STRING,
    allowNull: false,
  },
  otp: {
    type:Sequelize.STRING,
    default:null
  },
  otpExpiration: {
    type:Sequelize.STRING,
    default:null
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isLoggedIn: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
}, { timestamps: true });

Users.beforeCreate(async (user) => {
  if (user.otp) {
      user.otp = await bcrypt.hash(user.otp, 10);
  }
});

module.exports = Users
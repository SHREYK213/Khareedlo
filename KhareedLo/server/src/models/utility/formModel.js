// module.exports = (sequelize, DataTypes) => {
//   const Form = sequelize.define("form", {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     hasDropdown: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false,
//     },
//     inputAllowed: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//     },
//   });

//   return Form;
// };


const { Sequelize } = require("sequelize");
const db = require("../index")
const Form = db.define("form", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hasDropdown: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  inputAllowed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }, 
}, { timestamps: true }
);


// db.sync({ alter: true })
module.exports = Form
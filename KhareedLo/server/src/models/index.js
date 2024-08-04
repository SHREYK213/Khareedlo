// const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();


// const user = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// const database = process.env.DB_NAME;
// const encodedPassword = encodeURIComponent(password);
// // ('postgres://user:pass@example.com:5432/dbname')
// const connectionString = `postgres://${user}:${encodedPassword}@${host}:${port}/${database}`;
// const sequelize = new Sequelize(connectionString, {dialect: "postgres"})

// try{
//     sequelize.authenticate().then(() => {
//         console.log(`Database connected to KhareedLo`)
//     }).catch((err) => {
//         console.log(err)
//     })
// }catch(error){
//     console.error('Unable to connect to the database:', error);
// }


// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


// db.users = require('./users/userModel.js')(sequelize, DataTypes);
// db.forms = require('./utility/formModel.js')(sequelize, DataTypes);
// db.brands = require('./products/brand.js')(sequelize, DataTypes);
// db.products = require('./products/products.js')(sequelize, DataTypes);
// db.category = require('./products/category.js')(sequelize, DataTypes);


const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: "localhost",
});


// db.sync({ alter: true })
module.exports = db
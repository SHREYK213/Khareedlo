const { Sequelize, DataTypes } = require('sequelize');

const password = 'SHREY_213000$#@';
const encodedPassword = encodeURIComponent(password);
// ('postgres://user:pass@example.com:5432/dbname')
const connectionString = `postgres://Shreyas:${encodedPassword}@localhost:5432/khareedlo`;
const sequelize = new Sequelize(connectionString, {dialect: "postgres"})


sequelize.authenticate().then(() => {
    console.log(`Database connected to khareedlo`)
}).catch((err) => {
    console.log(err)
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('./userModel.js')(sequelize, DataTypes);

module.exports = db
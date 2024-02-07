const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user/userRoutes.js');
// const db = require('./models');
const db = require("./models/index.js");
// const Brand=require("./models/products/brand")
// const Category=require("./models/products/category.js")
// const Product=require("./models/products/products.js")
require('./database/mongoose')
// const formRoutes = require('./routes/utility/formRoutes.js');
const routes = require('./routes/routes.js')

const port = process.env.PORT || 3000;
const app = express();

// Use middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Uncomment if you need CORS
const cors = require('cors');
app.use(cors());

// Sync Sequelize models with the database
db.sync({ alter : false }).then(() => {
  console.log("Database is synchronized");
}).catch(err => {
  console.error("Error synchronizing database:", err);
});

// Use routes defined in userRoutes.js
// app.use('/api/users', userRoutes);

// app.use('/api/forms', formRoutes);
// app.use('/', router)
app.use('/', routes);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

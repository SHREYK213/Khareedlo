const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes.js');
const db = require('./models');

const port = process.env.PORT || 3000;
const app = express();

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Uncomment if you need CORS
// const cors = require('cors');
// app.use(cors());

// Sync Sequelize models with the database
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database is synchronized");
}).catch(err => {
  console.error("Error synchronizing database:", err);
});

// Use routes defined in userRoutes.js
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connection to MongoDB has been established successfully.');
    console.log(`Connected to database: ${db.name} on ${db.host}:${db.port}`);
  });
  
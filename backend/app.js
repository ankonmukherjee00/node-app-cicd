const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// const mongoURI = process.env.MONGO_URI;

// MongoDB connection
//mongoose.connect(mongoURI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
//})
//.then(() => console.log('Connected to MongoDB'))
//.catch((err) => console.error('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.APP_NAME || 'Node App'} with MongoDB!`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

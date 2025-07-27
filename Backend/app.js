const express = require('express');
const connectDB = require('./db/db');
const app = express();
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.get('/', (req, res) => {
  res.send('Hello, Uber Clone Backend!');
});

app.use('/users', userRoutes);


module.exports = app;
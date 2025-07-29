const express = require('express');
const connectDB = require('./db/db');
const app = express();
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

connectDB();
app.get('/', (req, res) => {
  res.send('Hello, Uber Clone Backend!');
});

app.use('/users', userRoutes);

module.exports = app;
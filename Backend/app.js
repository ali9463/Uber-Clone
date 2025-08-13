const express = require('express');
const connectDB = require('./db/db');
const app = express();
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

connectDB();
app.get('/', (req, res) => {
  res.send('Hello, Uber Clone Backend!');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
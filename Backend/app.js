const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Uber Clone Backend!');
});

module.exports = app;
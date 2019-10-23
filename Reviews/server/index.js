const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js');
const db = require('../database/connection.js');
const app = express();

const bodyParser = require('body-parser');

const PORT = 3004;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.use(bodyParser.json());

app.use('/air6n6/*/listing', express.static(path.join(__dirname, '../public')));

app.get('/reviews', (req, res) => {
  controller.getAll(req, res);
});

app.listen(PORT, () => console.log(`Movie list app listening on port ${PORT}`));
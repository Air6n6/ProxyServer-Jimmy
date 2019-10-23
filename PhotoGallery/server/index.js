const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const query = require('../database/query.js');
const PORT = 3008;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

app.use(express.static(__dirname + '/../public'));

app.get('/test', (req, res) => {
    query.retrieveAll((err, data) => {
        res.send(data);
    });
});

app.get('/listing/:listingid', (req, res) => {
    let id = req.params.listingid;
    query.retrieveById(id, (err, data) => {
      res.send(data);
    });
  });

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
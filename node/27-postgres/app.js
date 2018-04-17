'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('models', require('./models'));
const { Beach, Lifegaurd } = app.get('models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Listenting on port ${port}`); });

module.exports = app;

'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send()
});

app.listen(3000);

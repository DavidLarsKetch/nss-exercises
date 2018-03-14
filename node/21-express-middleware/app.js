#!/usr/bin/env node

"use strict";

const express = require('express');
const app = express();
require('dotenv').config();
const egg = require('./ascii');

const currentTime = (req, res, next) => {
  let d = new Date;
  req.currentTime = d.toString();
  next();
};

app.use(express.static(__dirname + '/public', {extensions: 'html'}));

app.use(currentTime);

app.use('/:maybe_egg', (req, res, next) => {
  if (req.params.maybe_egg.includes('egg')) {
    console.log(`You found the Easter Egg at ${req.currentTime}`);
    console.log(egg);
  }
  let err = new Error('nothing here!');
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => res.send('Nothing found here!'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));

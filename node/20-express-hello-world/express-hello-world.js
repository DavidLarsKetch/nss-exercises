#!/usr/bin/env node

"use strict";

const express = require('express');
const app = express();

// middleware
const currentISOTime = (req, res, next) => {
  let d = new Date
  req.ISOTime = d.toISOString();
  next();
};

app.use(currentISOTime);

app.get('/', (req, res) => res.send(`Hello World!\n${req.ISOTime}`));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));

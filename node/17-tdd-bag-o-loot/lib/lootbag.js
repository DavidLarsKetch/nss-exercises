"use strict";

const { errorEmitter } = require('./errors');

const { createDB } = require('./db');

const { argv: [,,...args] } = process;
const inputs = require('./parse-args')(args);
const caller = obj =>
  obj.fn(inputs || obj)
  .then(data => data)
  .catch(err => errorEmitter.emit('db_err', () => err));

module.exports = { caller };

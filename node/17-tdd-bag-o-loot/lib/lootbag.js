"use strict";

const { errorEmitter } = require('./errors');

const { createDB } = require('./db');

const { argv: [,,...args] } = process;
const inputs = require('./parse-args')(args);
const caller = obj => {
  obj.fn(obj)
  .then(({id}) => {
    console.log(id);
    return id;
  })
  .catch(err => errorEmitter.emit('db_err', () => err));
};

module.exports = { caller };

"use strict";

const { errorEmitter } = require('./errors');

const { Database } = require('sqlite3').verbose();
const db = new Database('gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err',
    () => console.log(new Error("failed connection"))
  );
});

const { argv: [,,...args] } = process;
const inputs = require('./parse-args')(args);

const caller = obj =>
  new Promise((resolve, reject) => {
    obj.fn(obj)
    .then((data) => {
      console.log(data.msg);
      resolve(data);
    })
    .catch(err => errorEmitter.emit('db_err', () => err));
  });

if (inputs) caller(inputs);
module.exports = { caller };

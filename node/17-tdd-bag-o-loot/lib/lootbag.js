"use strict";

const { errorEmitter } = require('./errors');

const { data } = require('../data/children');
const { Database } = require('sqlite3').verbose();
const db = new Database('data/gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err', () => console.log(new Error("failed connection")));
  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS gifts`);
    db.run(`CREATE TABLE IF NOT EXISTS gifts (id INTEGER PRIMARY KEY, child TEXT, gift TEXT, delivered INTEGER)`);
    data.forEach(({id, child, gift, delivered}) => db.run(
      `INSERT INTO gifts VALUES(
      ${id},
      "${child}",
      "${gift}",
      ${delivered}
    )`));
  });

});


const { argv: [,,...args] } = process;
const inputs = require('./parse-args')(args);

const caller = obj => obj.fn(inputs || obj);

module.exports = { caller };

"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/courses.sqlite');

module.exports.getAll = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT * FROM Course`, (err, data) => err ? reject(err) : resolve(data))
  );

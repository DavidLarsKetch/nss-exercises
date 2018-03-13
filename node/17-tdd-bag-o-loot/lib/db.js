"use strict";

const { errorEmitter } = require('./errors');

const { gifts } = require('../data/children');

const { Database } = require('sqlite3').verbose();
let db;

(function createDB() {
  db = new Database('gifts.sqlite', () =>
    module.exports.createTables()
    .then(data => {})
    .catch(err =>
      errorEmitter.emit('db_err',
        () => console.log(new Error('failed to create tables'))
      )
    )
  );
})();

module.exports.createTables = () =>
  new Promise((resolve, reject) =>
    db.serialize(function() {
      db.run(`DROP TABLE IF EXISTS gifts`);
      db.run(`CREATE TABLE IF NOT EXISTS gifts (id INTEGER PRIMARY KEY, child TEXT, gift TEXT, delivered INT)`,
        err => {
          if (err) return reject(err);
          resolve(insertRows());
        });
    })
  );

const insertRows = () =>
  Promise.all(
    gifts.map(({ child, gift }) =>
      new Promise((resolve, reject) =>
        db.run(
          `INSERT INTO gifts VALUES (
            null,
            "${child}",
            "${gift}",
            0
          )`,
          function(err) {
            if (err) return reject(err);
            resolve(this.lastID);
          }
        )
      )
    )
  );

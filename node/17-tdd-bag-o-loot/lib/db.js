"use strict";

const { errorEmitter } = require('./errors');

const { gifts } = require('../data/children');
const { Database } = require('sqlite3').verbose();
let db;



(function createDb() {
  db = new Database('gifts.sqlite', () => {
    module.exports.createTables()
    .then( (data) => {
      console.log("child ids", data);
    })
    .catch( (err) => {
      console.log("oops", err);
    });
  });
}());

module.exports.createTables = () => {
  return new Promise((resolve, reject) => {
    dropTable()
    .then(() =>
      db.run(
        `CREATE TABLE IF NOT EXISTS gifts (id INTEGER PRIMARY KEY, child TEXT, gift TEXT, delivered INT)`,
          err => {
            if (err) return reject(err);
            resolve(insertRows());
          }
      )
    )

  });
};

const dropTable = () =>
  new Promise((resolve, reject) =>
    db.run(`DROP TABLE IF EXISTS gifts`,
      err => {
        if (err) return reject(err);
        resolve();
      }
    )
  );

const insertRows = () => {
  return Promise.all(
    gifts.map(
      ({ child, gift }) => {
          return new Promise((resolve, reject) => {
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
          );
        });
      }
    )
  );
};

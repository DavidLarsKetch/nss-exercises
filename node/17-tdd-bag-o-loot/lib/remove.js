"use strict";
const { errorEmitter } = require('./errors');

const { Database } = require('sqlite3').verbose();
const db = new Database('gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err',
    () => console.log(new Error("failed connection"))
  );
});

module.exports.removeItemForChild = ({ child, gift }) =>
  new Promise((resolve, reject) => {
    db.run(`DELETE FROM gifts WHERE gift="${gift}" AND child="${child}"`,
      function(err) {
        if(err) reject(err);
        resolve({
          msg: 'Gift removed from db'
        });
      }
    );
  });

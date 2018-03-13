"use strict";
const { errorEmitter } = require('./errors');

const { Database } = require('sqlite3').verbose();
const db = new Database('gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err',
    () => console.log(new Error("failed connection"))
  );
});

module.exports.markAsDelivered = ({child}) =>
  new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(
        `SELECT * FROM gifts WHERE child="${child}"`,
        function(err, data) {
          if (err) reject(err);
          if (typeof data[0] == 'undefined') resolve({msg: 'Not a child'});
        }
      );

      db.run(`UPDATE gifts SET delivered=1 WHERE child="${child}"`,
        function(err) {
          if (err) reject(err);
          resolve({num: this.changes, msg: `Gifts delivered for ${child}!`});
        }
      );
    });
  });

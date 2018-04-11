"use strict";
const { errorEmitter } = require('./errors');

const { Database } = require('sqlite3').verbose();
const db = new Database('gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err',
    () => console.log(new Error("failed connection"))
  );
});

const validateObj = obj =>
  typeof obj !== 'undefined'
  && typeof obj.child !== "string"
  && typeof obj.gift !== "string" ? true : false;

module.exports.addItem = obj => {
  if (!obj || validateObj(obj)) throw new Error('Check your arguments');
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO gifts (id, child, gift, delivered)
    VALUES(
      null,
      "${obj.child}",
      "${obj.gift}",
      0
    )`,
    function (err){
      if (err) return reject(err);
      resolve({
        id: this.lastID,
        msg: `Successfully added: a ${obj.gift} for ${obj.child}`
      });
    });
  });
};

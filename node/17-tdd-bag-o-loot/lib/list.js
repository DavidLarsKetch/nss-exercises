"use strict";
const { errorEmitter } = require('./errors');

const { Database } = require('sqlite3').verbose();
const db = new Database('gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err',
    () => console.log(new Error("failed connection"))
  );
});

module.exports.listChildsToy = child =>
  new Promise((resolve, reject) => {
    db.all(`SELECT * FROM gifts WHERE child="${child}"`,
    function(err, data) {
      if (err) reject(err);
      resolve(data);
    })
  });

module.exports.listGoodChildren = () =>
  new Promise((resolve, reject) => {
    db.all(`SELECT child FROM gifts`,
    (err, data) => {
      let children = data.map(({child}) => child);
      if (err) reject(err);
      resolve(children.sort().filter((elm, idx, arr) => !idx || elm != arr[idx - 1]));
    })
  });

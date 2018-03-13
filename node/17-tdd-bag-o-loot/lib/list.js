"use strict";
const { errorEmitter } = require('./errors');

const { Database } = require('sqlite3').verbose();
const db = new Database('gifts.sqlite', err => {
  if (err) errorEmitter.emit('db_err',
    () => console.log(new Error("failed connection"))
  );
});

module.exports.listChildsToy = ({child}) =>
  new Promise((resolve, reject) => {
    db.all(`SELECT * FROM gifts WHERE child="${child}"`,
    function(err, data) {
      if (err) reject(err);
      let gifts = data.map(({gift}) => gift);
      resolve({data, msg: `${child}'s toys: ${gifts}`});
    })
  });

module.exports.listGoodChildren = () =>
  new Promise((resolve, reject) => {
    db.all(`SELECT child FROM gifts`,
    (err, data) => {
      let children = data
        .map(({child}) => child)
        .sort()
        .filter((elm, idx, arr) => !idx || elm != arr[idx - 1]);
      if (err) reject(err);
      resolve({data: children, msg: `All the good children: ${children}`});
    })
  });

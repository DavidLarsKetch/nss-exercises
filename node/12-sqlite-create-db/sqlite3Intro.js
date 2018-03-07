#!/usr/bin/env node

"use strict";

const { Database } = require('sqlite3').verbose();

const errorHandler = err => {if (err) console.log(`Msg: ${err}`);};

const db = new Database('example.sqlite',
  err => {
    errorHandler(err);
    console.log('Connected!');
    createTable()
    .then(() => populateMichael())
    .then(() => populateJim())
    .then(() => populateEmployees())
    .then(() => printEmployees())
    .then(() => closeDb());
  }
);

const employeeArr = [
  {id: 3, firstName: 'Dwight', lastName: 'Schrute'},
  {id: 4, firstName: 'Andy', lastName: 'Bernard'},
  {id: 5, firstName: 'Pam', lastName: 'Beesly'}
];

const createTable = () =>
  new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS employees`);

    db.run(`CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, first TEXT, last TEXT)`,
      () => resolve()
    );
  });

// Wraps each db.run in a Promise since they're all async funcs
const populateMichael = () =>
  new Promise((resolve, reject) =>
    db.run(`INSERT INTO employees (first, last) VALUES ('Michael', 'Scott')`,
      () => resolve()
    )
  );

const populateJim = () =>
  new Promise((resolve, reject) =>
    db.run(`INSERT INTO employees (first, last) VALUES ('Jim', 'Halpert')`,
      () => resolve()
    )
  );

const populateEmployees = () =>
  new Promise((resolve, reject) => {
    employeeArr.forEach(({id, firstName, lastName}) => {
      db.run(`INSERT INTO employees (id, first, last) VALUES (${id}, "${firstName}", "${lastName}")`);
      resolve();
    });
  });

const printEmployees = () =>
  new Promise((resolve, reject) => {
    db.all(`SELECT * FROM employees`, (err, all) => {
      errorHandler(err);
      all.forEach(({id, first, last}) =>
        process.stdout.write(`${id} | ${first} | ${last}\n`)
      );
    });
    resolve();
  });

const closeDb = () =>
  db.close(err => {
    errorHandler(err);
    process.stdout.write(`Database closed\n`);
    process.exit()
  });

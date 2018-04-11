#!/usr/bin/env node

"use strict";

const {Database} = require('sqlite3').verbose();
const {employees} = require('./employees.json');
const [,,input] = process.argv;
const errorHandler = err => {if (err) console.log(`Msg: ${err}`);};

const db = new Database('company.sqlite',
  err => {
    errorHandler(err);
    dropTable()
    .then(() => createTable())
    .then(() => populateEmployees())
    .then(() => printAll())
    .then(() => printJobs())
    .then(() => printEmployees())
    .then(() => {if(input) printSelection()});
  }
);

const createTable = () =>
  new Promise((resolve, reject) =>
    db.run(`CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)`,
    () => resolve())
  );

const dropTable = () =>
  new Promise((resolve, reject) =>
    db.run(`DROP TABLE IF EXISTS employees`, () => resolve())
);

// Wraps each individual insertion in a promise & uses Promise.all() to
// resolve only after all insertions are complete
const populateEmployees = () => {
  let promises = employees.map(emp =>
    new Promise((resolve, reject) =>
      db.run(`INSERT INTO employees VALUES (${emp.id}, "${emp.firstName}", "${emp.lastName}", "${emp.jobTitle}", "${emp.address}", ${emp.salary})`,
        () => resolve()
      )
    )
  );
  return Promise.all(promises);
};

const printAll = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT * FROM employees`, (err, data) => {
      errorHandler(err);
      data.forEach(emp => console.log(emp));
      resolve();
    })
  );

const printJobs = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT jobTitle FROM employees`, (err, data) => {
      errorHandler(err);
      data.forEach(({jobTitle}) => console.log(jobTitle));
      resolve();
    })
  );

const printEmployees = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT firstName, lastName, address FROM employees`, (err, data) => {
      errorHandler(err);
      data.forEach(({firstName, lastName, address}) =>
        console.log(`${firstName} ${lastName}, ${address}`)
      );
      resolve();
    })
  );

// Prints employees matching user input job title, none if no matches
const printSelection = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT firstName, lastName FROM employees WHERE jobTitle="${input.toLowerCase()}"`,
    (err, data) =>  {
      errorHandler(err);
      if (data.length === 0) return console.log("None");
      data.forEach(({firstName, lastName}) =>
        console.log(`${firstName} ${lastName}`)
      );
      resolve();
    })
  );

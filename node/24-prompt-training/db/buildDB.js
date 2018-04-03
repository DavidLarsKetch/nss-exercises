"use strict";

const { backup } = require('./backup.json');
const { makeCourseTable, insertIntoTable } = require('./makeCourseTable');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/courses.sqlite', () =>
  makeCourseTable() 
  .then(() => Promise.all(backup.map(item => insertIntoTable(item))))
  .then(([{msg}]) => console.log(msg)) 
  .catch(err => console.error(err))
);


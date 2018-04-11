"use strict";

const { assert: { equal } } = require('chai');

const { makeCourseTable, insertIntoTable } = require('../db/makeCourseTable');
const { backup } = require('../db/backup.json');
 
describe('db module', () => {
  it('should return the string, "Successful insertion in db"', () =>
    makeCourseTable()
    .then(() => Promise.all(backup.map(item => insertIntoTable(item))))
    .then(([{msg}]) => equal(msg, "Successful insertion in DB"))
  );
});

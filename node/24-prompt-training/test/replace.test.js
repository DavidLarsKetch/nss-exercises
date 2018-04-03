"use strict";

const { assert: { equal } } = require('chai'),
      { replace } = require('../app/models/replace'),
      { makeCourseTable, insertIntoTable } = require('../db/makeCourseTable'),
      { backup } = require('../db/backup.json');

const obj = {
  course_name: "Going from JavaScript to TypeScript",
  seats: 15,
  instructor: "Brenda Long",
  start: "2018-07-15",
  end: "2018-08-31",
  category: "JavaScript"
};

describe('replace module', () => {
  beforeEach(function(done) {
    makeCourseTable()
    .then(() => Promise.all(backup.map(item => insertIntoTable(item))))
    .then(() => done());
  });

  describe('replace()', () => {
    it('should return an ID when adding a new entry into the DB', () => {
      replace(obj)
      .then(id => equal(id, '2'));
    });
  });

});

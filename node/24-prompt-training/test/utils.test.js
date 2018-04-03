"use strict";

const { assert: { equal } } = require('chai'),
      { getTodaySQLite } = require('../app/utils/getDate');

describe('utils folder', () => {
  describe('getDate', () => {
    describe('getDateInSQLiteFormat()', () => {
      it('should return today\'s date in YYYY-MM-DD format', () => {
        const regex = new RegExp(/^\d{4}\-\d{2}-\d{2}$/);
        equal(regex.test(getTodaySQLite()), true);
      });
    });
  });
});

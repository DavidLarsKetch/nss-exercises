"use strict";

const { assert: { equal } } = require('chai');

const { removeItemForChild } = require('../lib/remove'),
      { createTables } = require('../lib/db');

describe('remove module', () => {
  beforeEach(function(done) {
    createTables()
    .then(() => done());
  });

  describe('removeItemForChild()', () => {
    it('should verify the specified gift was removed from the db', () => {
      const expected = "Gift removed from db";
      return removeItemForChild({child: "grace", gift: "doll"})
      .then(msg => equal(expected, msg))
    });
  });
});

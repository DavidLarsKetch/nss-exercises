"use strict";

const { assert: { equal, throws } } = require('chai');

const { addItem } = require('../lib/add');
const { createTables } = require('../lib/db');

describe('add module', () => {
  // Resets DB before each test
  beforeEach(function(done) {
    createTables()
    .then(() => done());
  });

  describe('addItem()', () => {
    it('should throw an error if data is not valid', () => {
      throws(() => {addItem({child: undefined, gift: undefined});}, Error, 'Check your arguments');
    });

    it("should add an item under a child's name in the db", () => {
      let test = {child: 'greg', gift: 'crayons'};
      return addItem(test)
      .then(obj => equal(19, obj.id));
    });
  });
});

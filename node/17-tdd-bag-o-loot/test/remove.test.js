"use strict";

const { assert: { equal } } = require('chai');

const { removeItemForChild } = require('../lib/remove');

describe('remove module', () => {
  describe('removeItemForChild()', () => {
    it('should verify a gift was removed from the db', () => {
      const expected = "Gift removed from db";
      return removeItemForChild()
      .then(msg => equal(expected, msg))
    });
  });
});

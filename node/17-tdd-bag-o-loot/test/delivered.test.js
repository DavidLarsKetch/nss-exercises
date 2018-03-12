"use strict";

const { assert: { equal } } = require('chai');

const { markAsDelivered } = require('../lib/delivered');

describe('delivered module', () => {
  describe('markAsDelivered()', () => {
    it('should return a confirmation', () => {
      const expected = 'Gift delivered';
      return markAsDelivered()
      .then(msg => equal(expected, msg))
    });
  });
});

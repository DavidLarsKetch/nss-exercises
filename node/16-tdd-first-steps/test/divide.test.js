"use strict";

const { assert: { equal } } = require('chai');
const { divide } = require('../lib/divide');

describe('divide module', () => {
  describe('divide()', () => {
    it('should return 2.5', () => {
      equal(2.5, divide([10, 4]));
    });
  });
});

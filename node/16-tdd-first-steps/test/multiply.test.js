"use strict";

const { assert: { equal } } = require('chai');
const { multiply } = require('../lib/multiply');

describe('multiply module', () => {
  describe('multiply()', () => {
    it('should return 27', () => {
      equal(27, multiply([3, 3, 3]));
    });
  });
});

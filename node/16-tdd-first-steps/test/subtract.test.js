"use strict";

const { assert: { equal } } = require('chai');
const { subtract } = require('../lib/subtract');

describe('subtract module', () => {
  describe('subtract', () => {
    it('should return -10', () => {
      equal(-10, subtract([10, 17, 3]));
    });
  });
});

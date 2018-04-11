"use strict";

const { assert: { equal } } = require('chai');
const { add } = require('../lib/add');

describe('add module', () => {
  describe('add()', () => {
    it('should return 5 when receiving 3 & 2', () => {
      equal(5, add([3,2]));
    });

    it('should return 25', () => {
      equal(25, add([91, -23, .812, -.812, -91, 23, 25]));
    });
  });
});

"use strict";

const { randomInt } = require('../dice-roll/lib/math');
const { assert: {isFunction, isNotNaN, oneOf} } = require('chai');

describe("math module", () => {
  describe('randomInt()', () => {
    it('should be a function', () => isFunction(randomInt));

    it('should return a number with its bounds', () => {
      for (let i = 0; i < 1000; i++) {
        oneOf(randomInt(1, 6), [1,2,3,4,5,6]);
      }
    });
  });

});

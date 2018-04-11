"use strict";

const { assert } = require('chai');

describe('Array', () => {
  let testArr = [1,2,3];

  describe('indexOf()', () =>
    it('should return -1 when the value is not present', () =>
      assert.equal(-1, testArr.indexOf(4))
    )
  );

  describe('length', () =>
    it('should not be 0', () =>
      assert.notEqual(0, testArr.length)
    )
  );
});

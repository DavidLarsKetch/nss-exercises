"use strict";

const { assert: { isString } } = require('chai'),
      { printAllUpcoming } = require('../app/views/upcoming'),
      { getAllUpcoming } = require('../app/models/select');

describe('upcoming module', () => {
  describe('printAllUpcoming()', () => {
    it('should return a string', () =>
      getAllUpcoming()
      .then(data => isString(printAllUpcoming(data)))
    );
  })
})

"use strict";

const { assert: { equal } } = require('chai');

const { markAsDelivered } = require('../lib/delivered');

const { createTables } = require('../lib/db');

describe('delivered module', () => {
  describe('markAsDelivered()', () => {
    beforeEach(function(done) {
      createTables()
      .then(() => done());
    });

    it('should return a confirmation', () => {
      const expected = `Gifts delivered for fatim!`;
      return markAsDelivered({child: 'fatim'})
      .then(({msg}) => equal(expected, msg))
    });

    it('should change the value of delivered from 0 to number of child\'s gifts',
      () => {
      return markAsDelivered({child: 'fatim'}) // Fatim has 2 gifts
      .then(({num}) => equal(2, num))
      }
    );

    it('should return the expected message on invalid child option', () => {
      const expected = 'Not a child';
      return markAsDelivered({child: 'franklin'}) // Not a child in the db
      .then(({msg}) => equal(msg, expected))
    });
  });
});

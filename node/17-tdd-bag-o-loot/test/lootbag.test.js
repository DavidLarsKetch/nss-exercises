"use strict";

const { assert: { deepEqual, equal } } = require('chai');

const { caller } = require('../lib/lootbag'),
      parse = require('../lib/parse-args'),
      { addItem } = require('../lib/add'),
      { markAsDelivered } = require('../lib/delivered'),
      { listChildsToy, listGoodChildren } = require('../lib/list'),
      { removeItemForChild } = require('../lib/remove'),
      { createTables } = require('../lib/db');

describe('lootbag module', () => {
  describe('caller()', () => {

    beforeEach(function(done) {
      createTables()
      .then(() => done());
    });

    it('should call addItem() thru caller() & return 19',
    () => {
      let parsed = parse(['add', 'stacy', 'stick']);
      return caller(parsed)
      .then(({id}) => equal(19, id));
    });

    it('should call removeItemForChild() thru caller() & return the same values as calling removeItemForChild() directly',
    () => {
      let parsed = parse(['remove', 'grace', 'doll']);
      return caller(parsed)
      .then(callerReturn =>
        removeItemForChild(parsed)
        .then(fnReturn =>
          deepEqual(fnReturn, callerReturn)
        )
      );
    });

    it('should call listGoodChildren() thru caller() & return the same values as calling listGoodChildren() directly',
    () => {
      let parsed = parse(['ls']);
      return caller(parsed)
      .then(callerReturn =>
        listGoodChildren(parsed)
        .then(fnReturn =>
          deepEqual(fnReturn, callerReturn)
        )
      );
    });

    it('should call listChildsToy() thru caller() & return the same values as calling listChildsToy() directly',
    () => {
      let parsed = parse(['ls', 'ben']);
      return caller(parsed)
      .then(callerReturn =>
        listChildsToy(parsed)
        .then(fnReturn =>
          deepEqual(fnReturn, callerReturn)
        )
      );
    });

    it('should call markAsDelivered() thru caller() & return the same values as calling markAsDelivered() directly',
    () => {
      let parsed = parse(['delivered']);
      return caller(parsed)
      .then(callerReturn =>
        markAsDelivered(parsed)
        .then(fnReturn =>
          deepEqual(fnReturn, callerReturn)
        )
      );
    });
  });
});

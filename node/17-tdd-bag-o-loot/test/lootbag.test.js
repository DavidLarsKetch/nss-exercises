"use strict";

const { assert: { equal, fail } } = require('chai');

const { caller } = require('../lib/lootbag'),
      parse = require('../lib/parse-args'),
      { addItem } = require('../lib/add'),
      { markAsDelivered } = require('../lib/delivered'),
      { listChildsToy, listGoodChildren } = require('../lib/list'),
      { removeItemForChild } = require('../lib/remove'),
      { createTables } = require('../lib/db');

describe('lootbag module', () => {
  beforeEach(function(done) {
    createTables()
    .then(() => done());
  });

  describe('caller()', () => {
    it.skip('should call addItem() by user inputting "add" as first arg in CLI',
    () => {
      let parsed = parse(['add', 'stacy', 'stick']);
      let resp = caller(parsed);
      // console.log(resp);
      equal(19, resp);
    });

    it.skip('should call removeItemForChild() by user inputting "remove" as first arg in CLI',
    () => {
      let parsed = parse(['remove']);
      equal(caller(parsed), removeItemForChild());
    });

    it.skip('should call listGoodChildren() by user inputting "ls" as first arg in CLI',
    () => {
      let parsed = parse(['ls']);
      equal(caller(parsed), listGoodChildren());
    });

    it.skip('should call listChildsToys() by user inputting "ls [name]" as first & second args in CLI',
    () => {
      let parsed = parse(['ls', 'ben']);
      equal(caller(parsed), listChildsToy());
    });

    it.skip('should call markAsDelivered() by user inputting "delivered" as first arg in CLI',
    () => {
      let parsed = parse(['delivered']);
      equal(caller(parsed), markAsDelivered());
    });
  });
});

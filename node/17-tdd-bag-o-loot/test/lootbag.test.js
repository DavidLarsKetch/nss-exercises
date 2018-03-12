"use strict";

const { assert: { equal, fail } } = require('chai');

const { caller } = require('../lib/lootbag'),
      parse = require('../lib/parse-args'),
      { addItem } = require('../lib/add'),
      { markAsDelivered } = require('../lib/delivered'),
      { listChildsToy, listGoodChildren } = require('../lib/list'),
      { removeItemForChild } = require('../lib/remove');

describe('lootbag module', () => {
  describe('callFn()', () => {
    it('should call addItem() by user inputting "add" as first arg in CLI',
    () => {
      let parsed = parse(['add']);
      equal(caller(parsed), addItem());
    });

    it('should call removeItemForChild() by user inputting "remove" as first arg in CLI',
    () => {
      let parsed = parse(['remove']);
      equal(caller(parsed), removeItemForChild());
    });

    it('should call listGoodChildren() by user inputting "ls" as first arg in CLI',
    () => {
      let parsed = parse(['ls']);
      equal(caller(parsed), listGoodChildren());
    });

    it('should call listChildsToys() by user inputting "ls [name]" as first & second args in CLI',
    () => {
      let parsed = parse(['ls', 'ben']);
      equal(caller(parsed), listChildsToy());
    });

    it('should call markAsDelivered() by user inputting "delivered" as first arg in CLI',
    () => {
      let parsed = parse(['delivered']);
      equal(caller(parsed), markAsDelivered());
    });
  });
});

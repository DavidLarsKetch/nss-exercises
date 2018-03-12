"use strict";

const { assert: { deepEqual, equal, isObject, throws } } = require('chai');

const parse = require('../lib/parse-args'),
      { addItem } = require('../lib/add'),
      { markAsDelivered } = require('../lib/delivered'),
      { listChildsToy, listGoodChildren } = require('../lib/list'),
      { removeItemForChild } = require('../lib/remove');

describe('parse-args module', () => {
  it(`should return an obj, when "add" is passed in, matching `, () => {
    let obj = {fn: addItem, gift: 'gamecube', child: "ben"}
    deepEqual(parse(['add', 'gamecube', 'ben']), obj);
  });

  it(`should return an obj, when "remove" is passed in, of:
  {fn: removeItemForChild, child: [name], gift: [item]}`, () => {
    let obj = {fn: removeItemForChild, child: "james", gift: "gamecube" }
    deepEqual(parse(['remove', 'james', 'gamecube']), obj);
  });

  it(`should return an obj, when "ls" is passed in, of:
  {fn: listGoodChildren}`, () => {
    deepEqual(parse(['ls']), {fn: listGoodChildren});
  });

  it(`should return an obj, when "ls [name]" is passed in of:
  {fn: listChildsToy, child: [name]}`, () => {
    let obj = {fn: listChildsToy, child: 'james'};
    deepEqual(parse(['ls', 'james']), obj);
  });

  it(`should return an obj, when "delivered" is passed in of:
  {fn: markAsDelivered, child: [name]}`, () => {
    let obj = {fn: markAsDelivered, child: 'james'};
    deepEqual(parse(['delivered', 'james']), obj);
  });

});

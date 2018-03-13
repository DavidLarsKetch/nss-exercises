"use strict";

const { assert: { deepEqual, isArray, isObject, notEqual} } = require('chai');

const { listChildsToy, listGoodChildren } = require('../lib/list');

describe('list module', () => {
  describe('listChildsToy()', () => {
    let expected = [
      {child: "fatim", gift: "doll", delivered: 0},
      {child: "fatim", gift: "stick", delivered: 0}
    ];

    it('should return an array', () => {
      return listChildsToy()
      .then(gifts => isArray(gifts));
    });

    it('should contain a collection of objects', () => {
      return listChildsToy('fatim')
      .then(gifts => isObject(gifts[0]));
    })

    it('should return a collection of objects for the specified child', () => {
      return listChildsToy('fatim')
      .then(gifts => deepEqual(gifts[0].gift, expected[0].gift))
    });
  });

  describe('listGoodChildren', () => {
    it('should return an array with no duplicates', () => {
      return listGoodChildren()
      .then(data => data.sort().map((a,b) => notEqual(a, data[b + 1])));
    });
  });
});

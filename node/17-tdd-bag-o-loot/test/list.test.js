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
      return listChildsToy({child: 'fatim'})
      .then(({data}) => isArray(data));
    });

    it('should contain a collection of objects', () => {
      return listChildsToy({child: 'fatim'})
      .then(({data}) => isObject(data[0]));
    })

    it('should return a collection of objects for the specified child', () => {
      return listChildsToy({child: 'fatim'})
      .then(({data}) => deepEqual(data[0].gift, expected[0].gift))
    });
  });

  describe('listGoodChildren', () => {
    it('should return an array with no duplicates', () => {
      return listGoodChildren()
      .then(({data}) => data.sort().map((a,b) => notEqual(a, data[b + 1])));
    });
  });
});

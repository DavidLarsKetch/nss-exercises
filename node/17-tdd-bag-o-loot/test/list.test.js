"use strict";

const { assert: { isArray } } = require('chai');

const { listChildsToy, listGoodChildren } = require('../lib/list');

describe('list module', () => {
  describe('listChildsToy()', () => {
    it('should return an array', () => {
      return listGoodChildren()
      .then(gifts => isArray(gifts));
    });
  });

  describe('listGoodChildren', () => {
    it('should return an array', () => {
      return listGoodChildren()
      .then(kids => isArray(kids));
    });
  });
});

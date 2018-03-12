"use strict";

const { assert: { equal, isTrue } } = require('chai');
const { errorEmitter } = require('../lib/errors');

describe('error module', () => {
  describe('errorEmitter', () => {
    describe('parse_err', () => {
  // If there is no errorEmitter.on('parse_err') in the app, this will timeout
      it('should not timeout on a parse_err emit', done => {
  // errorEmitter.on('parse_err') calls done(), thus passing the test
        errorEmitter.emit('parse_err', done);
      });
    });
    describe('db_err', () => {
  // If there is no errorEmitter.on('db_err') in the app, this will timeout
      it('should not timeout on a db_err emit', done => {
  // errorEmitter.on('db_err') calls done(), passing the test
        errorEmitter.emit('db_err', done);
      });
    });
  });
});

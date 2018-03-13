"use strict";

const { assert: { } } = require('chai');
const { errorEmitter } = require('../lib/errors');

describe('error module', () => {
  describe('errorEmitter', () => {
    describe('bad_args', () => {
  // If there is no errorEmitter.on('bad_args') in the app, this will timeout
      it('should not timeout on a bad_args emit', done => {
  // errorEmitter.on('bad_args') calls done(), thus passing the test
        errorEmitter.emit('bad_args', done);
      });
    });

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

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
  });
});

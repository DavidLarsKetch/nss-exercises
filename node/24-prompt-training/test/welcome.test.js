"use strict";

const { assert: { equal } } = require('chai'),
      { greetingMsg } = require('../app/views/welcome'),
      { options } = require('../app/controllers/promptCtrl');

const msg = `
Welcome to the Bangazon Continuing Ed Course Creator!
  Please choose from the following:
    1 create a new course
    2 edit an existing course
    3 remove a course
    4 view an upcoming course
    5 view all upcoming courses
    6 view a past course
    7 view all past courses
`;

describe('console module', () =>
  describe('greetingMsg()', () => {
    it('should return a string ', () =>
      equal(typeof greetingMsg(options), 'string')
    );
    it('should return this message', () =>
      equal(greetingMsg(options), msg)
    );
  })
);

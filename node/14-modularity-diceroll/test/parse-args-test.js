"use strict";

const parse = require('../dice-roll/lib/parse-args');
const { assert: { deepEqual } } = require('chai');

describe("parse-args module", () => {
  describe("parse-args()", () => {
    it("should return an object { count: n, sides: n }", () => {
      let [a, b, c, d, e, f] = [8, 2, 10, .231, "hello", {}];
      deepEqual(parse([]), {count: 1, sides: 6});
      deepEqual(parse([a]), {count: 1, sides: a});
      deepEqual(parse([b,c,d,e]), {count: b, sides: c});
      deepEqual(parse([d,e,f]), {count: 1, sides: d});
    })
  })
})

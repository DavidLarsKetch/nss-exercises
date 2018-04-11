"use strict";

const { assert: { isNumber } } = require('chai');
const parse = require('../lib/parse-args');

describe("parse-args module", () => {
  it('should return an array containing only numbers', () => {
    let inputs = [1, "sup", {num: 231}, 19, [21, 10], {str: "shoot"}];
    let outputs = parse(inputs);
    outputs.forEach(out => isNumber(out));
  });
});

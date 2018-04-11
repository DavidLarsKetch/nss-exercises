#!/usr/bin/env node

"use strict";

const {argv: [,, operator, ...args]} = process;

const { add } = require('./add'),
      { divide } = require('./divide'),
      { multiply } = require('./multiply'),
      nums = require('./parse-args')(args),
      { subtract } = require('./subtract');

const operations = {
  add, divide, multiply, subtract
};

if (!Object.keys(operations).includes(operator) || nums.length === 0)
  return console.log('Please supply a valid operation: add, subtract, multiply, or divide & some numbers!');

return console.log(operations[operator](nums));



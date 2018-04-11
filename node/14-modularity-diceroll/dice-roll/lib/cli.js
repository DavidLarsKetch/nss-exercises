"use strict";

process.title = 'Dice Roll';

const [,, ...args] = process.argv,
      {count, sides} = require('./parse-args')(args),
      {roll, toDiceNotation} = require('./dice');

const dice = toDiceNotation(count, sides),
      total = roll(dice);

module.exports = () => process.stdout.write(`${dice} total: ${total}\n`);

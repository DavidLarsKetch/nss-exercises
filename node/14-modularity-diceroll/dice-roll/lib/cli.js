"use strict";

process.title = 'Dice Roll';

const [,, ...args] = process.argv;
const {count, sides} = require('./parse-args')(args);
const {roll, toDiceNotation} = require('./dice');

const dice = toDiceNotation({count, sides});
const total = roll(dice);

module.exports = () => process.stdout.write(`${dice} total: ${total}\n`);

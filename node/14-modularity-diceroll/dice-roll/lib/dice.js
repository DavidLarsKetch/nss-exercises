"use strict";

const {randomInt} = require('./math');

const roll = dice => {
  let [count, sides] = dice.split('d');
  return randomInt(count, sides);
};

// Creates dice notation as per reqs
const toDiceNotation = (count, sides) => `${count}d${sides}`;

module.exports = {roll, toDiceNotation};

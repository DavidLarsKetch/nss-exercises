"use strict";

const veggies = {
  tomato: 0.3,
  lettuce: 0.15,
  arugula: 0.3,
  spinach: 0.25,
  carrot: 0.3
};

module.exports.get = selection => {
  return veggies[selection];
};

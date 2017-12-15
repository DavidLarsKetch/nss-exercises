"use strict";

const condiments = {
  mustard: 0.1,
  mayo: 0.1,
  sriracha: 0.15,
  pesto: 0.25
};

module.exports.get = selection => {
  return condiments[selection];
};

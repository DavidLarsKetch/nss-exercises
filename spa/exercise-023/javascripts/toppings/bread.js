"use strict";

const bread = {
  french: 1,
  white: 0.65,
  rye: 0.85,
};

module.exports.get = selection => {
  return bread[selection];
};

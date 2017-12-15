"use strict";

const protein = {
  tofu: 2,
  seitan: 3,
  tempeh: 2.5
};

module.exports.get = selection => {
  return protein[selection];
};

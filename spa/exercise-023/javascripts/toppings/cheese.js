"use strict";

const cheese = {
  cheddar: 0.2,
  american: 0.15,
  gouda: 0.4,
  bleu: 0.25,
  parmesan: 0.3
};

module.exports.get = selection => {
  return cheese[selection];
};

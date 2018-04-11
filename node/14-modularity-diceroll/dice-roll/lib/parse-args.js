"use strict";

module.exports = ([arg1, sides]) => {
// Default 1d6 roll if no user options are entered
  if (!arg1) return {count: 1, sides: 6}
// Default 1dN roll if user passes in only 1 option
  if (!sides) return {count: 1, sides: arg1}
// Otherwise, rolls the dice entered w/ 2 options
  return {count: arg1, sides}
};

"use strict";

module.exports = args => {
// Default 1d6 roll if no user options are entered
  if (args.length === 0) return {count: 1, sides: 6}
// Defaul 1dN roll if user passes in only 1 option
  if (args.length < 2) return {count: 1, sides: args}
// Otherwise, rolls the dice entered w/ 2 options
  return {count: args[0], sides: args[1]}
};

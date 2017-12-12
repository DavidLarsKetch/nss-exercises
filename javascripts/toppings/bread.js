const bread = {
  french: 1,
  white: .65,
  rye: .85,
  "whole grain": .95,
  "gluten free": 1,
  oat: .75,
  wrap: .5,
  lettuce: .3
}

const addBread = selection => {
  return bread[selection];
}

module.exports = addBread;

const veggies = {
  "bell pepper": .75,
  "summer squash": .65,
  tomato: .3,
  lettuce: .15,
  arugula: .3,
  spinach: .25,
  carrot: .3,
  "sauteed mushrooms": .5,
  "red onion": .3,
  "sauteed onions": .4
}

const getVeggies = selection => {
  return veggies[selection];
}

module.exports = getVeggies;

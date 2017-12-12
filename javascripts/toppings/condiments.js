const condiments = {
  ketchup: .05,
  mustard: .1,
  dijon: .2
  mayo: .1,
  sriracha: .15,
  "oil n vin": .15,
  pesto: .25
}

const addCondiment = selection => {
  return condiments[selection];
}

module.exports = addCondiment;

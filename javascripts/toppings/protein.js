const protein = {
  tofu: 2,
  seitan: 3,
  tempeh: 2.5,
  "bean spread": 2.25,
  "veggie bacon": 1
}

const addProtein = selection => {
  return protein[selection];
}

module.exports = addProtein;

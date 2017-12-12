const cheese = {
  cheddar: .2,
  american: .15,
  gouda: .4,
  manchego: .35,
  brie: .25,
  bleu: .25,
  parmesan: .3
}

const addCheese = selection => {
  return cheese[selection];
}

module.exports = addCheese;

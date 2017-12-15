"use strict";

const dom = require("./DOMHandler");
const bread = require("./toppings/bread");
const protein = require("./toppings/protein");
const condiments = require("./toppings/condiments");
const veggies = require("./toppings/veggies");
const cheese = require("./toppings/cheese");

let selectionFuncs = {
  bread: bread.get,
  protein: protein.get,
  condiments: condiments.get,
  veggies: veggies.get,
  cheese: cheese.get
};

let selectionObj = {
  bread: '',
  protein: '',
  veggies: '',
  cheese: '',
  condiments: ''
};

let total = 0;

module.exports.getTotal = event => {
  let selections = dom.getSelections();
  selections.forEach(item => {
    selectionObj[item.id] = [...item]
    .filter(el => el.selected === true)
    .map(el => el.value);
  });
  findPrices();
  total = dom.printToDOM(total);
};

const findPrices = () => {
  for (let key in selectionObj) {
    if (selectionObj[key][0] !== undefined)
      for (let i = 0; i < selectionObj[key].length; i++){
        let opt = selectionObj[key][i];
        let price = selectionFuncs[key](opt);
        total += price;
      }
  }
  total = total.toFixed(2);
};

dom.addListener();

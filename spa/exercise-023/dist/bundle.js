(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const maker = require("./sandwich-maker");

module.exports.addListener = () => {
  document.getElementById('total').addEventListener("click", maker.getTotal);
};

module.exports.getSelections = event => {
  let menus = [...document.getElementsByClassName("selection-menu")];
  return menus;
};

module.exports.printToDOM = val => {
  const output = document.getElementById("output");
  output.innerHTML = `$${val}`;
  val = 0;
  return val;
};

},{"./sandwich-maker":2}],2:[function(require,module,exports){
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

},{"./DOMHandler":1,"./toppings/bread":3,"./toppings/cheese":4,"./toppings/condiments":5,"./toppings/protein":6,"./toppings/veggies":7}],3:[function(require,module,exports){
"use strict";

const bread = {
  french: 1,
  white: 0.65,
  rye: 0.85,
};

module.exports.get = selection => {
  return bread[selection];
};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

const condiments = {
  mustard: 0.1,
  mayo: 0.1,
  sriracha: 0.15,
  pesto: 0.25
};

module.exports.get = selection => {
  return condiments[selection];
};

},{}],6:[function(require,module,exports){
"use strict";

const protein = {
  tofu: 2,
  seitan: 3,
  tempeh: 2.5
};

module.exports.get = selection => {
  return protein[selection];
};

},{}],7:[function(require,module,exports){
"use strict";

const veggies = {
  tomato: 0.3,
  lettuce: 0.15,
  arugula: 0.3,
  spinach: 0.25,
  carrot: 0.3
};

module.exports.get = selection => {
  return veggies[selection];
};

},{}]},{},[2]);

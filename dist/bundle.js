(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const applyDiscount = event => {
  let season = event.target.value.toLowerCase();
  const cardElms = document.getElementsByClassName("card");

  [...cardElms].map( item => {
    let discountElmClasses = item.lastChild.classList;
    let regularElmClasses = item.children[2].classList;
    
    if ([...discountElmClasses].indexOf(season) > -1) {
      discountElmClasses.toggle("hidden");
      regularElmClasses.toggle("hidden");
    } else {
      regularElmClasses.remove("hidden");
      discountElmClasses.add("hidden");
    }
  });
};

const selector = document.getElementById("selector").addEventListener("change", applyDiscount);

},{}],2:[function(require,module,exports){
"use strict";
const container = document.getElementById("container");
const cardHolder = document.getElementById("cardHolder");

const display = data => {
  const select = createSelectButton();
  container.appendChild(select);

  data.forEach( item => cardHolder.appendChild(createProductCard(item)));
  container.appendChild(cardHolder);
};

const createProductCard = data => {
  const card = document.createElement("div");
  card.className = "card";

  const itemNameElm = document.createElement("h2");
  const itemNameNode = document.createTextNode(data.name);
  itemNameElm.appendChild(itemNameNode);

  const itemDeptElm = document.createElement("h4");
  const itemDeptNode = document.createTextNode(data.department);
  itemDeptElm.appendChild(itemDeptNode);

  const itemPriceElm = document.createElement("h3");
  const itemPriceNode = document.createTextNode(data.price);
  itemPriceElm.appendChild(itemPriceNode);

  const discountPriceElm = document.createElement("h3");
  const discountPriceNode = document.createTextNode(data.discount);
  discountPriceElm.className = `hidden ${data.season.toLowerCase()} discount`;
  discountPriceElm.appendChild(discountPriceNode);

  card.appendChild(itemNameElm);
  card.appendChild(itemDeptElm);
  card.appendChild(itemPriceElm);
  card.appendChild(discountPriceElm);

  return card;
};

const createSelectButton = () => {

  const select = document.getElementById("selector");

  const seasonOpt = document.createElement("option");
  const seasonNode = document.createTextNode("Season");
  seasonOpt.appendChild(seasonNode);
  seasonOpt.setAttribute("name", "season");

  const springOpt = document.createElement("option");
  springOpt.setAttribute("name", "spring");
  const springNode = document.createTextNode("Spring");
  springOpt.appendChild(springNode);

  const autumnOpt = document.createElement("option");
  autumnOpt.setAttribute("name", "autumn");
  const autumnNode = document.createTextNode("Autumn");
  autumnOpt.appendChild(autumnNode);

  const winterOpt = document.createElement("option");
  winterOpt.setAttribute("name", "winter");
  const winterNode = document.createTextNode("Winter");
  winterOpt.appendChild(winterNode);

  select.appendChild(seasonOpt);
  select.appendChild(springOpt);
  select.appendChild(autumnOpt);
  select.appendChild(winterOpt);

  return select;
};

module.exports = display;

},{}],3:[function(require,module,exports){
"use strict";

// While looping through each product, loop through categories and find the department name that
// matches the product_id of product_id

const displayData = require("./display.js");

const productsLooper = (products, categories) => {
  products.forEach( item => categoriesLooper(item, categories));
  displayData(products);
};

const categoriesLooper = (item, categories) => {
  categories.forEach( category => matcher(item, category));
};

const matcher = (item, category) => {
  if (item.category_id === category.id) {
    item.department = category.name;
    item.season = category.season_discount;
    item.discount = Math.round((item.price * 100) - (item.price * 100) * category.discount) / 100;
  }

};

module.exports = productsLooper;

},{"./display.js":2}],4:[function(require,module,exports){
"use strict";

const startXHR = require("./xhrs.js");

startXHR();

},{"./xhrs.js":5}],5:[function(require,module,exports){
"use strict";

const formatData = require("./format.js");
require("./DOM-interactions");

let parsedProds = [];
let parsedCats = [];
const prodsXHR = new XMLHttpRequest();
const categoryXHR = new XMLHttpRequest();

const error = () => {
  console.log("There's been an error!!!");
};

const parseProdData = event => {
  parsedProds = JSON.parse(event.target.responseText).products;
  formatData(parsedProds, parsedCats);
};

const parseCatData = event => {
  parsedCats = JSON.parse(event.target.responseText).categories;
  prodsXHR.send();
};

prodsXHR.addEventListener("load", parseProdData);
prodsXHR.addEventListener("error", error);

prodsXHR.open("GET", "data/products.json");

categoryXHR.addEventListener("load", parseCatData);
categoryXHR.addEventListener("error", error);

categoryXHR.open("GET", "data/categories.json");
let send = () => {categoryXHR.send();};

module.exports = send;

},{"./DOM-interactions":1,"./format.js":3}]},{},[4]);

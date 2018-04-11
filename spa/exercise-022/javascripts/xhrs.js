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

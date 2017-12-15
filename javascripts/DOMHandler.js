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

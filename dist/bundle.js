(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let carnivores = [];
let herbivores = [];
const loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();
  loader.addEventListener("load", function() {
    carnivores = JSON.parse(this.responseText);
    callbackToInvoke(carnivores.carnivores);
  });
  loader.open("GET", "carnivores.json");
  loader.send();
};

const loadHerbivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    herbivores = JSON.parse(this.responseText);
    callbackToInvoke(herbivores.herbivores);
  });
  loader.open("GET", "herbivores.json");
  loader.send();
};

module.exports = { loadCarnivores, loadHerbivores };

},{}],2:[function(require,module,exports){
"use strict";
const animal = require("./animal");
const container = document.getElementById("container");
function showCarnivores(data) {
  data.forEach(item => {container.innerHTML += `<div>${item}</div>`;});
}

function showHerbivores(data) {
  data.forEach(item => {container.innerHTML += `<div>${item}</div>`;});
}

animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);

},{"./animal":1}]},{},[2]);

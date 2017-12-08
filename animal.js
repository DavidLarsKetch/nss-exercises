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

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

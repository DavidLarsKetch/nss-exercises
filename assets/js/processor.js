"use strict";
const take = require("lodash/take");
const flattenDeep = require("lodash/flattenDeep");

let asteroids = [];

function findAsteroids(obj, bool) {
  return obj
    .filter(asteroid => asteroid.is_potentially_hazardous_asteroid === bool)
    .map(asteroid => asteroid.name);
}

module.exports.process = data => {
  let allNeos = data.near_earth_objects;
  let dates = Object.keys(allNeos);
  for (let date = 0; date < dates.length; date++) {
  }
  if (!asteroids || asteroids.length < 3) {
    for (let date = 0; date < dates.length; date++) {
      asteroids.push(findAsteroids(allNeos[dates[date]], false));
    }
  }
  asteroids = flattenDeep(asteroids);
  return take(asteroids, 3);
};

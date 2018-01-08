"use strict";
const $ = require('jquery');
const random = require('lodash/random');

const from = "Cohort-23";
const slurs = ["back", "blackadder", "bus", "cocksplat", "donut", "gfy", "ing", "keep", "king", "off", "outside", "problem", "yoda", "you"];

module.exports.nasa = selection => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url:
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${selection.from}&end_date=${selection.to}&api_key=DEMO_KEY`
    })
    .done(data => {
      resolve(data);
    })
    .fail(err => {
      reject(err);
    });
  });
};

module.exports.foaas = selection => {
  let num = random(0, slurs.length - 1);

  return new Promise(function(resolve, reject) {
    $.ajax({
      accepts: {
        json: 'application/json'
      },
      dataType: 'json',
      url: `http://www.foaas.com/${slurs[num]}/${selection}/${from}`
    })
    .done(data => {
      resolve(data);
    })
    .fail(err => {
      reject(err);
    });
  });
};

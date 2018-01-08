"use strict";

const $ = require('jquery');
const wrongDatesTemplate = require("../templates/partials/wrong.hbs");

let arr = [];
const range = {};

module.exports.addBtnClick = (fn) => {
  $("#enter").click(() => {
    organizeDates();

    let result = check();

    if(result) {
      fn(range);
    } else {
      $("#output").empty();
      $("#output").append(wrongDatesTemplate);
    }

  });
};

"use strict";

const $ = require('jquery');
const wrongDatesTemplate = require("../templates/partials/wrong.hbs");

let arr = [];
const range = {};

function organizeDates() {
  //Reorganizes in case user enters 'to' date before 'for' date
  arr.push($("input[name='from']").val(), $("input[name='to']").val());
  arr.sort();
  range.from = arr[0];
  range.to = arr[1];
  arr = [];
}

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

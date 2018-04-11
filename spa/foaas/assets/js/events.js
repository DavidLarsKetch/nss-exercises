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

function check() {
  //Checks whether dates fit parameters of NASA API.
  let dateRegEx = new RegExp(/^\d{4}-\d{2}-\d{2}/, 'g');
  let result = dateRegEx.test(`${range.from} ${range.to}`);
  if (result) {
    //Converts dates to milliseconds
    let date1 = new Date(range.to).getTime();
    let date2 = new Date(range.from).getTime();
    let diff = Math.abs(date1 - date2);
    //Checks whether the date range exceeds 7 days, in milliseconds
    result = diff < 604800000 ? true : false;
  }
  return result;
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

"use strict";

const colors = require('colors');
const Table = require('cli-table');

module.exports.printAllUpcoming = data => {
  const table = new Table({
    head: ["Course", "Seats", "Instructor", "Start", "End", "Category"]
  });

  data.map(({
    course_name,
    no_of_seats,
    instructor_name,
    start_date,
    end_date,
    course_category
  }) => {
    table.push([
      course_name,
      no_of_seats,
      instructor_name,
      start_date,
      end_date,
      course_category
    ])
  });

  return table.toString();
};

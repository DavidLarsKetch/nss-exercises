"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/courses.sqlite');

module.exports.replace = ({
    id = null,
    course_name,
    seats,
    instructor,
    start,
    end,
    category
  }) =>
  new Promise((resolve, reject) =>
    db.run(`REPLACE INTO Course (
              course_id,
	      course_name,
  	      no_of_seats,
	      instructor_name,
	      start_date,
	      end_date,
	      course_category
	    ) VALUES (
	      ${id},
	      "${course_name}",
	      ${seats},
	      "${instructor}",
	      "${start}",
	      "${end}",
	      "${category}"
	    )`,
      function(err) {
	err ? reject(err) : resolve(this.lastID)
      }
    )
  );

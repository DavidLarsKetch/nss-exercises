"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/courses.sqlite');


module.exports.makeCourseTable = () =>
  new Promise((resolve, reject) =>
    db.serialize(() => {
      db.run('DROP TABLE IF EXISTS Course');
      db.run(`CREATE TABLE IF NOT EXISTS Course (
  	        course_id INTEGER PRIMARY KEY,
	        course_name TEXT,
  	        no_of_seats INT,
  	        instructor_name TEXT,
  	        start_date TEXT,
  	        end_date TEXT,
  	        course_category TEXT
        )`, err => err ? reject(err) : resolve()
      );
    })
  )

module.exports.insertIntoTable = ({ course_name, seats, instructor, start, end, category }) =>
  new Promise((resolve, reject) =>
    db.run(`INSERT INTO Course (
	      course_id, 
	      course_name,
  	      no_of_seats,
	      instructor_name, 
	      start_date,
	      end_date,
	      course_category
	    ) VALUES (
	      null,
	      "${course_name}",
	      ${seats},
	      "${instructor}",
	      "${start}",
	      "${end}",
	      "${category}"
	    )`, err => err ? reject(err) : resolve({msg: "Successful insertion in DB"})
    )
  );


"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/courses.sqlite'),
      { getTodaySQLite } = require('../utils/getDate');

module.exports.getAllUpcoming = () =>
  new Promise((resolve, reject) =>
    db.all(`SELECT * FROM Course
      WHERE strftime("%Y-%m-%d", start_date) >= "${getTodaySQLite()}"`,
      (err, data) => err ? reject(err) : resolve(data)
    )
  );

module.exports.getByName = name =>
  new Promise((resolve, reject) =>
    db.get(`SELECT * FROM Course WHERE course_name="${name}"`,
      (err, data) => err ? reject(err) : resolve(data || null)
    )
  );

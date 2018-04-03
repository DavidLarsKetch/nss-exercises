"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/courses.sqlite');

module.exports.delete = id =>
  new Promise((resolve, reject) =>
    db.run(`DELETE FROM Course WHERE course_id=${id}`,
      function(err) { return err ? reject(err) : resolve(this.changes) }
    )
  );
     


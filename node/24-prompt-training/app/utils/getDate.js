"use strict";
const moment = require('moment');

module.exports.getTodaySQLite = () =>
  moment().format('YYYY-MM-DD');

"use strict";

const EventEmitter = require('events');
class ErrorEmitter extends EventEmitter {};
const errorEmitter = new ErrorEmitter();

errorEmitter.on('parse_err', err => err());
errorEmitter.on('db_err', err => err());
module.exports = { errorEmitter };

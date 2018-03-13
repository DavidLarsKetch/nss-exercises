"use strict";

const EventEmitter = require('events');
class ErrorEmitter extends EventEmitter {};
const errorEmitter = new ErrorEmitter();

errorEmitter.on('bad_args', err => err());
errorEmitter.on('parse_err', err => err());
errorEmitter.on('db_err', err => err());
module.exports = { errorEmitter };

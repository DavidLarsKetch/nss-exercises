"use strict";

const $ = require('jquery');
const Handlebars = require('hbsfy/runtime');
const errTemplate = require('../templates/partials/error.hbs');
const foaasTemplate = require('../templates/foaas.hbs');
const foTemplate = require('../templates/partials/fuck-off.hbs');
const xhr = require('./xhr');
const listener = require('./events');
const processor = require("./processor");

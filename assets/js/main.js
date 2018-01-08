"use strict";

const $ = require('jquery');
const Handlebars = require('hbsfy/runtime');
const errTemplate = require('../templates/partials/error.hbs');
const foaasTemplate = require('../templates/foaas.hbs');
const foTemplate = require('../templates/partials/fuck-off.hbs');
const xhr = require('./xhr');
const listener = require('./events');
const processor = require("./processor");

const callXHR = selection => {
  $("#output").empty();
  xhr.nasa(selection)
  .then(data => {
    let names = processor.process(data);
    names.forEach(name => {
      xhr.foaas(name)
      .then(msg => {
        $("#output").append(foTemplate(msg));
      })
      .catch(err => {
        ("#output").append(errTemplate);
      });
    });
  })
  .catch(err => {
    $("#output").append(errTemplate);
  });
};

$("#container").append(foaasTemplate);
listener.addBtnClick(callXHR);

"use strict";

const { argv: [,,...args] } = process;
const inputs = require('./parse-args')(args);
const { addItem } = require('./add'),
      { markAsDelivered } = require('./delivered'),
      { listChildsToy } = require('./listChildsToy'),
      { listGoodChildren } = require('./listGoodChildren'),
      { removeItemForChild } = require('./remove');

const caller = () => {
  inputs.fn();
};

module.exports = {
  caller
};

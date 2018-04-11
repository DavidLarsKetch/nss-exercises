"use strict";

const { errorEmitter } = require('./errors');

const { addItem } = require('./add'),
      { markAsDelivered } = require('./delivered'),
      { listChildsToy, listGoodChildren } = require('./list'),
      { removeItemForChild } = require('./remove');

const opts = {
  add: addItem,
  delivered: markAsDelivered,
  remove: removeItemForChild
};

module.exports = ([toCall, arg1, arg2]) => {
  if (toCall === 'add') return {fn: opts[toCall], gift: arg1, child: arg2};
  if (toCall === 'remove') return {fn: opts[toCall], child: arg1, gift: arg2};
  if (toCall === 'delivered') return {fn: opts[toCall], child: arg1};
  if (toCall === 'ls' && arg1) return {fn: listChildsToy, child: arg1};
  if (toCall === 'ls') return {fn: listGoodChildren};
  errorEmitter.emit('parse_err', () => process.stdout.write('Bad arguments\n'));
};

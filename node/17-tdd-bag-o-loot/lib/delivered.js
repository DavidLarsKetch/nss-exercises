"use strict";

module.exports.markAsDelivered = () =>
  new Promise((resolve, reject) => {
    resolve("Gift delivered");
  });

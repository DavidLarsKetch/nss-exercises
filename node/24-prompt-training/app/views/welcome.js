"use strict";

const welcomeMsg = `
Welcome to the Bangazon Continuing Ed Course Creator!
  Please choose from the following:\n`;

module.exports.greetingMsg = ([...options]) =>
  welcomeMsg.concat(options.map(
    ({msg}, idx) => `    ${idx + 1} ${msg}`
  ).join('\n')).concat('\n');

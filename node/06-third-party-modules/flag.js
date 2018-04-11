#!/usr/bin/env node

"use strict";
const input = process.argv[2];

const {flags} = require('./countries');
const {red} = require('chalk');

let countries = [...Object.keys(flags)];

if (input !== "rand" && !countries.includes(input)) {
  let msg = red(`Options:`);
  countries = countries.map((elm, idx) => `\n  ${idx + 1}.  ${elm}`);
  process.stdout.write(`${msg}${countries}\n`);
  process.exit();
} else if (input === "rand") {
  let rand = Math.floor((Math.random() * countries.length));
  let input = countries[rand];
  let flag = flags[input](); 
  process.stdout.write(`${input}\n${flag}\n`);
  process.exit();
} else {
  let flag = flags[input]();
  process.stdout.write(`${flag}\n`);
  process.exit();
}

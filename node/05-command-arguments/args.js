#!/usr/bin/env node

"use strict";
let nums = process.argv.map(i => +i).filter(i => i == i);
let total;
if (nums.length === 0) total = 0;
if (nums.length != 0) total = nums.reduce((a, b) => a + b);

process.stdout.write(`${total}\n`);

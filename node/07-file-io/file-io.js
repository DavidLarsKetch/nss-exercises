#!/usr/bin/env node

"use strict";

const {readFileSync} = require('fs');

const [,,input] = process.argv;

if (!input) {
	process.stdout.write(`Usage: ./file-io.js [file-path]\n`);
	process.exit();
}

const fileContents = readFileSync(input);

process.stdout.write(`${fileContents}`);
process.exit();

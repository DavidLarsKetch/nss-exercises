#!/usr/bin/env node

"use strict";

const [,,input, output] = process.argv;

if (!input || !output) {
	process.stdout.write("Usage: ./streams.js [file-to-read] [output-file-path]\n");
	process.exit();
}

const { createReadStream, createWriteStream, writeFile } = require('fs');
const { Transform } = require('stream');

const upperCaseify = Transform();
upperCaseify._transform = (buffer, _, cb) => cb(null, buffer.toString().toUpperCase());

createReadStream(input).pipe(upperCaseify).pipe(createWriteStream(`${output}`));

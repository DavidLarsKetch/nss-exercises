#!/usr/bin/env node

"use strict";

const [,,input, output] = process.argv;

if (!input || !output) {
	process.stdout.write("Usage: ./streams.js [file-to-read] [output-file-path]\n");
	process.exit();
}

const { createReadStream, writeFile } = require('fs');
const { Transform, Writable } = require('stream');

const upperCaseify = Transform();
upperCaseify._transform = (buffer, _, cb) =>
	cb(null, buffer.toString().toUpperCase());

const writeStream = Writable();
writeStream._write = (buffer, _, next) => {
	writeFile(output, buffer, err => {
		if (err) throw err;
	});
	next();
};

createReadStream(input).pipe(upperCaseify).pipe(writeStream);

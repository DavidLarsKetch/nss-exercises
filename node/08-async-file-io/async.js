#!/usr/bin/env node

"use strict";

const {readFile} = require('fs');
const [,,input] = process.argv;

if (!input) {
	process.stdout.write("Usage: async.js [file-path]");
	process.exit();
}

readFile(input, (err, data) => {
	if (err) throw err;
	process.stdout.write(data);
});

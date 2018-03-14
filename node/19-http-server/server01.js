#!/usr/bin/env node

"use strict";

const http = require('http');
const server = http.createServer();
const { createReadStream } = require('fs');


server.on('request', (req, res) => {
  console.log('Request received for:', req.url);
  createReadStream('index.html').pipe(res);
});

server.listen(8081);

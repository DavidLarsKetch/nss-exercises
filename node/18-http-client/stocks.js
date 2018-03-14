#!/usr/bin/env node

"use strict";

const { get } = require('https');

const url = "https://api.iextrading.com/1.0";
const { argv: [,,ticker] } = process;

const yearAvg = data => {
  let days = data.length;

  let total = data.map(({close}) => close).reduce((a,b) => a + b);
  return Math.floor(total / days);
};


get(`${url}/stock/${ticker}/chart/1y`, (res) => {
  const statusCode = res.statusCode;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\nStatus Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error(
      `Invalid content-type.\nExpected application/json but received ${contentType}`
    );
  }

  if (error) {
    console.log(error.message);
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', chunk => rawData += chunk);
  res.on('end', () => {
    try {
      let avg = yearAvg(JSON.parse(rawData));
      console.log(`The yearly average close for ${ticker} was: ${avg}`);
    } catch (e) {
      console.log(e.message);
    }
  });
}).on('error', e => console.log(`Got error: ${e.message}`));

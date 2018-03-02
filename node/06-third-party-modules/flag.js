#!/usr/bin/env node

"use strict";
const countries = ['belgium', 'colombia', 'france', 'germany', 'netherlands', 'peru', 'russia', 'usa'];
const country = process.argv[2];

if (!countries.includes(country)) {
  process.stdout.write(`'Usage: ./index.js ${countries}'\n`);
  process.exit();
}

const {bgBlack, bgBlue, bgRed, bgWhite, bgYellow, bgYellowBright, white}  = require('chalk');

const striper = spaces => {
  let space = ``;
  for (let i = 0; i < spaces; i++) {
    space += ` `;
  }
  return space;
};

const belgiumBlackStripe = bgBlack(striper(16));
const belgiumYellowStripe = bgYellowBright(striper(16));
const franceBlueStripe = bgBlue(striper(16));
const franceWhiteStripe = bgWhite(striper(16));
const fullBlackStripe = bgBlack(striper(50));
const fullBlueStripe = bgBlue(striper(50));
const fullOrangeStripe = bgYellow(striper(50));
const fullRedStripe = bgRed(striper(50));
const fullWhiteStripe = bgWhite(striper(50));
const fullYellowStripe = bgYellowBright(striper(50));
const horizontalRedStripe = bgRed(striper(16));
const starMargin = bgBlue(` `);
const usaRedStripe = bgRed(striper(35));
const usaWhiteStripe = bgWhite(striper(35));
const whiteStar = bgBlue(white(`\u2606`));

const sevenStars = `${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}`;
const sixStars = `${starMargin}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${starMargin}`;


const flags = {
  belgium: () => {
    process.stdout.write(`${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}
${belgiumBlackStripe}${belgiumYellowStripe}${horizontalRedStripe}\n`);
  },
  colombia: () => {
    process.stdout.write(`${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}\n`);
  },
  france: () => {
    process.stdout.write(`${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}
${franceBlueStripe}${franceWhiteStripe}${horizontalRedStripe}\n`);
  },
  germany: () => {
    process.stdout.write(`${fullBlackStripe}
${fullBlackStripe}
${fullBlackStripe}
${fullBlackStripe}
${fullBlackStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullYellowStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}\n`);
  },
  netherlands: () => {
    process.stdout.write(`${fullOrangeStripe}
${fullOrangeStripe}
${fullOrangeStripe}
${fullOrangeStripe}
${fullOrangeStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}\n`);
  },
  peru: () => {
    process.stdout.write(`${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}\n`);
  },
  russia: () => {
    process.stdout.write(`${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullRedStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullWhiteStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}
${fullBlueStripe}\n`);
  },
  usa: () => {
    process.stdout.write(`${sevenStars}${usaRedStripe}
${sixStars}${usaWhiteStripe}
${sevenStars}${usaRedStripe}
${sixStars}${usaWhiteStripe}
${sevenStars}${usaRedStripe}
${sixStars}${usaWhiteStripe}
${sevenStars}${usaRedStripe}
${fullWhiteStripe}
${fullRedStripe}
${fullWhiteStripe}
${fullRedStripe}
${fullWhiteStripe}
${fullRedStripe}\n`);
  }
};

flags[country]();
process.exit();

"use strict";

const {
  bgBlack,
  bgBlue,
  bgBlueBright,
  bgGreen,
  bgRed,
  bgWhite,
  bgYellow,
  bgYellowBright,
  white
} = require('chalk');

const striper = spaces => " ".repeat(spaces);

////// FULL STRIPES
const fullBlack = bgBlack(striper(50));
const fullBlue = bgBlue(striper(50));
const fullBlueBright = bgBlueBright(striper(50));
const fullGreen = bgGreen(striper(50));
const fullOrange = bgYellow(striper(50));
const fullRed = bgRed(striper(50));
const fullWhite = bgWhite(striper(50));
const fullYellow = bgYellowBright(striper(50));

////// FULL HORIZONTAL STRIPES
const horizBlack = bgBlack(striper(16));
const horizBlue = bgBlue(striper(16));
const horizGreen = bgGreen(striper(16));
const horizOrange = bgYellow(striper(16));
const horizRed = bgRed(striper(16));
const horizWhite = bgWhite(striper(16));
const horizYellow = bgYellowBright(striper(16));

////// COUNTRY-SPECFIC
  // NORDIC
const firstHorizWhite = bgWhite(striper(13));
const secondHorizWhite = bgWhite(striper(32));
const whiteMargin = bgWhite(striper(2));

    // DENMARK
const firstDen = bgRed(striper(13))
const secondDen = bgWhite(striper(5));
const thirdDen = bgRed(striper(32));

    // FINLAND
const firstFin = bgWhite(striper(11));
const secondFin = bgBlue(striper(9));
const thirdFin = bgWhite(striper(30));

    // ICELAND
const firstIce = bgBlue(striper(11));
const secondIce = bgRed(striper(5));
const thirdIce = bgBlue(striper(30));

    // NORWAY
const firstNor = bgRed(striper(11));
const secondNor = bgBlue(striper(5));
const thirdNor = bgRed(striper(30));

    // SWEDEN
const firstSwed = bgBlue(striper(13));
const secondSwed = bgYellowBright(striper(5));
const thirdSwed = bgBlue(striper(32));

    // USA
const starMargin = bgBlue(` `);
const usaRed = bgRed(striper(35));
const usaWhite = bgWhite(striper(35));
const whiteStar = bgBlue(white(`\u2606`));
const sevenStars =
  `${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}`;
const sixStars =
  `${starMargin}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${whiteStar}${starMargin}${starMargin}`;

////// FLAG GENERATOR OBJ
const flags = {
  armenia: () => {
    let flag = `${fullRed}\n`.repeat(5);
    flag += `${fullBlue}\n`.repeat(5);
    flag += `${fullOrange}\n`.repeat(5);
    return flag;
  },
  austria: () => {
    let flag = `${fullRed}\n`.repeat(5);
    flag += `${fullWhite}\n`.repeat(5);
    flag += `${fullRed}\n`.repeat(5);
    return flag;
  },
  belgium: () => `${horizBlack}${horizYellow}${horizRed}\n`.repeat(15),
  bulgaria: () => {
    let flag = `${fullWhite}\n`.repeat(5);
    flag += `${fullGreen}\n`.repeat(5);
    flag += `${fullRed}\n`.repeat(5);
    return flag;
  },
  colombia: () => {
    let flag = `${fullYellow}\n`.repeat(8);
    flag += `${fullBlue}\n`.repeat(3);
    flag += `${fullRed}\n`.repeat(4);
    return flag;
  },
  denmark: () => {
    let flag = `${firstDen}${secondDen}${thirdDen}\n`.repeat(6);
    flag += `${fullWhite}\n`.repeat(2);
    flag += `${firstDen}${secondDen}${thirdDen}\n`.repeat(6);
    return flag;
  },
  estonia: () => {
    let flag = `${fullBlueBright}\n`.repeat(5);
    flag += `${fullBlack}\n`.repeat(5);
    flag += `${fullWhite}\n`.repeat(5);
    return flag;
  },
  finland: () => {
    let flag = `${firstFin}${secondFin}${thirdFin}\n`.repeat(5);
    flag += `${fullBlue}\n`.repeat(4);
    flag += `${firstFin}${secondFin}${thirdFin}\n`.repeat(6);
    return flag;
  },
  france: () => `${horizBlue}${horizWhite}${horizRed}\n`.repeat(15),
  germany: () => {
    let flag = `${fullBlack}\n`.repeat(5);
    flag += `${fullRed}\n`.repeat(5);
    flag += `${fullYellow}\n`.repeat(5);
    return flag;
  },
  hungary: () => {
    let flag = `${fullRed}\n`.repeat(5);
    flag += `${fullWhite}\n`.repeat(5);
    flag += `${fullGreen}\n`.repeat(5);
    return flag;
  },
  iceland: () => {
    let flag =
      `${firstIce}${whiteMargin}${secondIce}${whiteMargin}${thirdIce}\n`
      .repeat(5);
    flag += `${firstHorizWhite}${secondIce}${secondHorizWhite}\n`;
    flag += `${fullRed}\n`.repeat(2);
    flag += `${firstHorizWhite}${secondIce}${secondHorizWhite}\n`;
    flag +=
      `${firstIce}${whiteMargin}${secondIce}${whiteMargin}${thirdIce}\n`
      .repeat(5);
    return flag;
  },
  indonesia: () => {
    let flag = `${fullRed}\n`.repeat(7);
    flag += `${fullWhite}\n`.repeat(7);
    return flag;
  },
  ireland: () => `${horizGreen}${horizWhite}${horizOrange}\n`.repeat(15),
  italy: () => `${horizGreen}${horizWhite}${horizRed}\n`.repeat(15),
  latvia: () => {
    let flag = `${fullRed}\n`.repeat(6);
    flag += `${fullWhite}\n`.repeat(3);
    flag += `${fullRed}\n`.repeat(6);
    return flag;
  },
  mali: () => `${horizRed}${horizYellow}${horizGreen}\n`.repeat(15),
  mauritius: () => {
    let flag = `${fullRed}\n`.repeat(4);
    flag += `${fullBlue}\n`.repeat(4);
    flag += `${fullYellow}\n`.repeat(4);
    flag += `${fullGreen}\n`.repeat(4);
    return flag;
  },
  netherlands: () => {
    let flag = `${fullRed}\n`.repeat(5);
    flag += `${fullWhite}\n`.repeat(5);
    flag += `${fullBlue}\n`.repeat(5);
    return flag;
  },
  nigeria: () => `${horizGreen}${horizWhite}${horizGreen}\n`.repeat(15),
  norway: () => {
    let flag =
      `${firstNor}${whiteMargin}${secondNor}${whiteMargin}${thirdNor}\n`
      .repeat(5);
    flag += `${firstHorizWhite}${secondNor}${secondHorizWhite}\n`;
    flag += `${fullBlue}\n`.repeat(2);
    flag += `${firstHorizWhite}${secondNor}${secondHorizWhite}\n`;
    flag +=
      `${firstNor}${whiteMargin}${secondNor}${whiteMargin}${thirdNor}\n`
      .repeat(5);
    return flag;
  },
  peru: () => `${horizRed}${horizWhite}${horizRed}\n`.repeat(15),
  poland: () => {
    let flag = `${fullWhite}\n`.repeat(7);
    flag += `${fullRed}\n`.repeat(7);
    return flag;
  },
  romania: () => `${horizBlue}${horizYellow}${horizRed}\n`.repeat(15),
  russia: () => {
    let flag = `${fullWhite}\n`.repeat(5);
    flag += `${fullBlue}\n`.repeat(5);
    flag += `${fullRed}\n`.repeat(5);
    return flag;
  },
  sweden: () => {
    let flag = `${firstSwed}${secondSwed}${thirdSwed}\n`.repeat(6);
    flag += `${fullYellow}\n`.repeat(3);
    flag += `${firstSwed}${secondSwed}${thirdSwed}\n`.repeat(6);
    return flag;
  },
  ukraine: () => {
    let flag = `${fullBlue}\n`.repeat(7);
    flag += `${fullYellow}\n`.repeat(7);
    return flag;
  },
  usa: () => {
    let flag = `${sevenStars}${usaRed}\n${sixStars}${usaWhite}\n`.repeat(3);
    flag += `${sevenStars}${usaRed}\n`;
    flag += `${fullWhite}\n${fullRed}\n`.repeat(3);
    return flag;
  },
};

module.exports = { flags };

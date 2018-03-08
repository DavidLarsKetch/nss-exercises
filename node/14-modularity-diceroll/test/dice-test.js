"use strict";

const { toDiceNotation, roll } = require("../dice-roll/lib/dice"),
      { assert: { isNotNaN, isString, oneOf } } = require('chai');

describe("dice module", () => {
  describe("toDiceNotation()", () => {
    it("should be a string", () => {
      isString(toDiceNotation(1, 6));
    });
  });

  describe("roll()", () => {
    it("should be a number", () => {
      isNotNaN(roll('2d8'));
    });

    it("should accept a string & return a computed number", () => {
      for (let i = 0; i < 10; i++) {
        let diceNotation = `${i}d6`;
        oneOf(roll(diceNotation), Array.from(Array(61).keys()));
      }
    });

  });
})

const { expect } = require("chai");
const { isClean, getMonthlyPrice } = require("./monthpric.js");

describe("isClean", () => {
  const testCases = [
    { review: "avril lavigne has best dang tour", expected: false },
    { review: "what a bad film", expected: true },
    { review: "oh my heck I hated it", expected: false },
    { review: "ripoff", expected: true },
    { review: "That was a pleasure", expected: true },
    { review: "shoot! I cant say I liked it", expected: false },
  ];

  testCases.forEach(({ review, expected }) => {
    it(`should return ${expected} for review "${review}"`, () => {
      expect(isClean(review)).to.equal(expected);
    });
  });
})

describe("getMonthlyPrice", () => {
  const testCases = [
    { tier: "basic", expected: 10000 },
    { tier: "premium", expected: 15000 },
    { tier: "", expected: 0 },
    { tier: "invalid", expected: 0 },
    { tier: "enterprise", expected: 50000 },
  ];

  testCases.forEach(({ tier, expected }) => {
    it(`should return ${expected} for tier "${tier}"`, () => {
      expect(getMonthlyPrice(tier)).to.equal(expected);
    });
  });
});

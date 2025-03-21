const add = require("../src/string-calculator");

test("should return 0 when an empty string is passed", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself when a single number is passed", () => {
  expect(add("1")).toBe(1);
});

test("should return sum of two comma-separated numbers", () => {
  expect(add("1,5")).toBe(6);
});

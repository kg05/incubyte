const add = require("../src/string-calculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

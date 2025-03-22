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

test("should return sum of multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("should handle new lines between number", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support different delimiters like ;", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should support different delimiters like *", () => {
  expect(add("//*\n1*2")).toBe(3);
});

test("should throw an error for negative number", () => {
  expect(() => add("1\n3,-4")).toThrow("negative numbers not allowed -4");
});

test("should throw an error for multiple negative numbers", () => {
  expect(() => add("1\n3,-4,2,-5-6")).toThrow(
    "negative numbers not allowed -4,-5,-6"
  );
});

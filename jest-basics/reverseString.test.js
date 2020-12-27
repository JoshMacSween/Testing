const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("string reverses", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});

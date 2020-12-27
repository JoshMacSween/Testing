const functions = require("./functions");

test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2 to not equal five", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Expects isNull to be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual can compare more complex data types, like objects and arrays
test("Should create user Josh MacSween", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Josh",
    lastName: "MacSween",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//Working with async data

//Promise
test("User fetched name Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//Async Await
test("User fetched name Leanne Graham Async", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual("Leanne Graham");
});
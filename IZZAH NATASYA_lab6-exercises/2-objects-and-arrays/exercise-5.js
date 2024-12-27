const assert = require("assert");

// Expected Behavior: Count Letters for each of the name in the array of object

const countLetters = (arr) => {
  return arr.map((x) => x.name.length);
};

/* 
  Add test cases below
*/
// Test case 1: Array of objects with names of varying lengths
assert.deepStrictEqual(
  countLetters([{ name: "Shah" }, { name: "Bob" }, { name: "Charlie" }]),
  [4, 3, 7],
  'For [{ name: "Shah" }, { name: "Bob" }, { name: "Charlie" }], the result should be [4, 3, 7]'
);

// Test case 2: Array with a single object and an empty name
assert.deepStrictEqual(
  countLetters([{ name: "" }]),
  [0],
  'For [{ name: "" }], the result should be [0]'
);

// Test case 3: Array with names of length 1
assert.deepStrictEqual(
  countLetters([{ name: "A" }, { name: "B" }, { name: "C" }]),
  [1, 1, 1],
  'For [{ name: "A" }, { name: "B" }, { name: "C" }], the result should be [1, 1, 1]'
);

console.log("All Tests Passed.");

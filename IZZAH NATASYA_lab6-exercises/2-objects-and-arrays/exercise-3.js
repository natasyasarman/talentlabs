const assert = require("assert");
// Expected Behavior:
// Given an array of numbers, return a new array that has only the numbers that are 10 or greater.

const tenAndGreaterOnly = (arr) => {
  return arr.filter((x) => x >= 10);
};

/* 
  Add test cases below
*/
// Test case 1: Normal case with mixed numbers
assert.deepStrictEqual(
  tenAndGreaterOnly([5, 10, 15, 20]),
  [10, 15, 20],
  "For [5, 10, 15, 20], the result should be [10, 15, 20]"
);

// Test case 2: All numbers are below 10
assert.deepStrictEqual(
  tenAndGreaterOnly([1, 2, 3, 4, 9]),
  [],
  "For [1, 2, 3, 4, 9], the result should be []"
);

// Test case 3: All numbers are 10 or greater
assert.deepStrictEqual(
  tenAndGreaterOnly([10, 12, 15, 20]),
  [10, 12, 15, 20],
  "For [10, 12, 15, 20], the result should be [10, 12, 15, 20]"
);

console.log("All Tests Passed.");

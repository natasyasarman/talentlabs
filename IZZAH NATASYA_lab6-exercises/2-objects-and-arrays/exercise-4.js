const assert = require("assert");

// Expected Behavior:
// Given an array of strings, return a new array that only
// includes those that are 6 characters or fewer in length

const sixCharactersOrFewerOnly = (arr) => {
  return arr.filter((x) => x.length < 6);
};

/* 
  Add test cases below
*/
// Test case 1: Array with strings of various lengths
assert.deepStrictEqual(
  sixCharactersOrFewerOnly(["apple", "banana", "pear", "peach"]),
  ["apple", "pear", "peach"],
  'For ["apple", "banana", "pear", "peach"], the result should be ["apple", "pear", "peach"]'
);

// Test case 2: All strings are longer than 6 characters
assert.deepStrictEqual(
  sixCharactersOrFewerOnly(["elephant", "giraffe", "kangaroo"]),
  [],
  'For ["elephant", "giraffe", "kangaroo"], the result should be []'
);

// Test case 3: All strings are 6 characters or fewer
assert.deepStrictEqual(
  sixCharactersOrFewerOnly(["cat", "dog", "mouse"]),
  ["cat", "dog", "mouse"],
  'For ["cat", "dog", "mouse"], the result should be ["cat", "dog", "mouse"]'
);

// Test case 4: Empty array
assert.deepStrictEqual(
  sixCharactersOrFewerOnly([]),
  [],
  "For an empty array, the result should be []"
);

console.log("All Tests Passed.");

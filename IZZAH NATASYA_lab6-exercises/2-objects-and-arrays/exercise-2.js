const assert = require("assert");

// Expected Behavior: Get the first N element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
// Example: first([1, 2, 3], 2) => [1, 2]

const first = (input_array, number_of_elements) => {
  return input_array.slice(0, number_of_elements);
};

/* 
  Add test cases below
*/
// Test case 1: Get the first 2 elements of a non-empty array
assert.deepStrictEqual(
  first([1, 2, 3, 4, 5], 2),
  [1, 2],
  "Getting the first 2 elements of [1, 2, 3, 4, 5] should return [1, 2]"
);

// Test case 2: Get the first 0 elements (edge case)
assert.deepStrictEqual(
  first([1, 2, 3, 4, 5], 0),
  [],
  "Getting the first 0 elements of [1, 2, 3, 4, 5] should return []"
);

// Test case 3: Requesting more elements than the array length
assert.deepStrictEqual(
  first([1, 2, 3], 5),
  [1, 2, 3],
  "Requesting 5 elements from [1, 2, 3] should return [1, 2, 3]"
);

console.log("All Tests Passed.");

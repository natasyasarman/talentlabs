const assert = require("assert");

// Expected Behavior: Merge two arrays

const merge_array = (arr1, arr2) => {
  return arr1.concat(arr2);
};

/* 
  Add test cases below
*/
// Test case 1: Merge two non-empty arrays
assert.deepStrictEqual(
  merge_array([1, 2, 3], [4, 5, 6]),
  [1, 2, 3, 4, 5, 6],
  "Merging [1, 2, 3] and [4, 5, 6] should return [1, 2, 3, 4, 5, 6]"
);

// Test case 2: Merge an array with an empty array
assert.deepStrictEqual(
  merge_array([1, 2, 3], []),
  [1, 2, 3],
  "Merging [1, 2, 3] and [] should return [1, 2, 3]"
);

// Test case 3: Merge two empty arrays
assert.deepStrictEqual(
  merge_array([], []),
  [],
  "Merging [] and [] should return []"
);

// Test case 4: Merge an empty array with a non-empty array
assert.deepStrictEqual(
  merge_array([], [4, 5, 6]),
  [4, 5, 6],
  "Merging [] and [4, 5, 6] should return [4, 5, 6]"
);

console.log("All Tests Passed.");

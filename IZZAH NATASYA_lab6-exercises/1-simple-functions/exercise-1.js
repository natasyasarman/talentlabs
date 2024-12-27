const assert = require("assert");

// Expected Behavior: the halve function would return half of the input number (i.e. divide by 2)

function halve(number) {
  return number / 2;
}

/* 
  Add test cases below
*/
// Test case 1: Halving a positive number
assert.strictEqual(halve(12), 6, "Halving 12 should return 6");

// Test case 2: Halving a negative number
assert.strictEqual(halve(-12), -6, "Halving -12 should return -6");

// Test case 3: Halving zero
assert.strictEqual(halve(0), 0, "Halving 0 should return 0");

// Test case 4: Halving a decimal number
assert.strictEqual(halve(2.5), 1.25, "Halving 2.5 should return 1.25");

// Test case 5: Halving a very large number
assert.strictEqual(halve(1e6), 5e5, "Halving 1,000,000 should return 500,000");

console.log("All Tests Passed.");

const assert = require("assert");

// Expected Behavior: multiplies two numbers together

function multiply(x, y) {
  return x * y;
}

/* 
  Add test cases below
*/
// Test case 1: Multiplying two positive numbers
assert.strictEqual(multiply(6, 2), 12, "6 * 2 should return 12");

// Test case 2: Multiplying a positive and a negative number
assert.strictEqual(multiply(-6, 2), -12, "-6 * 2 should return -12");

// Test case 3: Multiplying two negative numbers
assert.strictEqual(multiply(-6, -2), 12, "-6 * -2 should return 12");

// Test case 4: Multiplying a number by zero
assert.strictEqual(multiply(6, 0), 0, "6 * 0 should return 0");

console.log("All Tests Passed.");

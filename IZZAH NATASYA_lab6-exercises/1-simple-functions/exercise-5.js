const assert = require("assert");

/*
  Expected Behavior: 
  ---------------------------------
  - if number is less than zero, return the word "negative"
  - if number is more or equal to zero, return the word "positive"
*/

function negativeOrPositive(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "positive";
  }
}

/* 
  Add test cases below
*/
// Test case 1: A positive number
assert.strictEqual(
  negativeOrPositive(2),
  "positive",
  '2 should return "positive"'
);

// Test case 2: Zero (edge case)
assert.strictEqual(
  negativeOrPositive(0),
  "positive",
  '0 should return "positive"'
);

// Test case 3: A negative number
assert.strictEqual(
  negativeOrPositive(-2),
  "negative",
  '-2 should return "negative"'
);

// Test case 6: A decimal positive number
assert.strictEqual(
  negativeOrPositive(1.23),
  "positive",
  '1.23 should return "positive"'
);

console.log("All Tests Passed.");

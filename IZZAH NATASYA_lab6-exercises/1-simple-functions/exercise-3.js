const assert = require("assert");

// Expected Behavior: takes a name (a string) and returns a greeting

function createGreeting(inputName) {
  return "Hello, my name is " + inputName;
}

/* 
  Add test cases below
*/
// Test case 1: Standard input with a normal name
assert.strictEqual(
  createGreeting("Shah"),
  "Hello, my name is Shah",
  'Greeting for "Shah" should return "Hello, my name is Shah"'
);

// Test case 2: Input is an empty string
assert.strictEqual(
  createGreeting(""),
  "Hello, my name is ",
  'Greeting for an empty string should return "Hello, my name is "'
);

// Test case 3: Input is a name with special characters
assert.strictEqual(
  createGreeting("Aini'"),
  "Hello, my name is Aini'",
  'Greeting for "Aini\'" should return "Hello, my name is Aini\'"'
);

// Test case 4: Input is a name with spaces
assert.strictEqual(
  createGreeting("Shah Hilmi"),
  "Hello, my name is Shah Hilmi",
  'Greeting for "Shah Hilmi" should return "Hello, my name is Shah Hilmi"'
);

console.log("All Tests Passed.");

const assert = require("assert");

// Expected Behavior: Convert the input to all upper case

function convertToUpperCase(inputName) {
  return inputName.toUpperCase();
}

/* 
  Add test cases below
*/
// Test case 1: Standard string with all lowercase letters
assert.strictEqual(
  convertToUpperCase("hello world"),
  "HELLO WORLD",
  'Converting "hello world" should return "HELLO WORLD"'
);

// Test case 2: String with mixed case
assert.strictEqual(
  convertToUpperCase("HeLLo WoRld"),
  "HELLO WORLD",
  'Converting "HeLLo WoRld" should return "HELLO WORLD"'
);

// Test case 3: String already in uppercase
assert.strictEqual(
  convertToUpperCase("HELLO WORLD"),
  "HELLO WORLD",
  'Converting "HELLO WORLD" should return "HELLO WORLD"'
);

// Test case 4: String with numbers and special characters
assert.strictEqual(
  convertToUpperCase("test123!"),
  "TEST123!",
  'Converting "test123!" should return "TEST123!"'
);

console.log("All Tests Passed.");

const assert = require("assert");

/*
  Expected Behavior: 
  ---------------------------------
  Checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
  if (mark >= 80) {
    return "A";
  } else if (mark > 60) {
    return "B";
  } else if (mark > 50) {
    return "C";
  } else {
    return "F";
  }
}

/* 
  Add test cases below
*/
// Test case 1: Mark that should result in "A"
assert.strictEqual(calculateGrade(85), "A", 'A mark of 85 should return "A"');

// Test case 2: Mark on the boundary of "A"
assert.strictEqual(calculateGrade(80), "A", 'A mark of 80 should return "A"');

// Test case 3: Mark that should result in "B"
assert.strictEqual(calculateGrade(75), "B", 'A mark of 75 should return "B"');

// Test case 4: Mark on the boundary of "B"
assert.strictEqual(calculateGrade(61), "B", 'A mark of 61 should return "B"');

// Test case 5: Mark that should result in "C"
assert.strictEqual(calculateGrade(55), "C", 'A mark of 55 should return "C"');

// Test case 6: Mark on the boundary of "C"
assert.strictEqual(calculateGrade(51), "C", 'A mark of 50 should return "C"');

// Test case 7: Mark that should result in "F"
assert.strictEqual(calculateGrade(45), "F", 'A mark of 45 should return "F"');

console.log("All Tests Passed.");

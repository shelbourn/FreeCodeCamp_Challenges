/* From Challenge: "Stand in Line"
Push / Shift Functions to push a number to the end of an array, remove the 1st, and return the 1st

Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of array. The nextInLine function should then return the element that was removed.*/


function nextInLine(arr, item) {
  arr .push(item);
  var firstItem = arr .shift();
  // Your code here
  
  return firstItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


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


/* From Challenge: "Use Conditional Logic with If Statements"

If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions because they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

Instructions
Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise. */


// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

/* From Challenge: "Comparison with the Equality Operator"

There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value at the right of the operator to a variable in the left.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal".

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. Once it does, however, it can compare terms as follows:

   1   ==  1    // true
   1   ==  2    // false
   1   == '1'   // true
  "3"  ==  3    // true
Instructions
Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12 */


// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(12);

/* From Challenge: "Comparison with the Strict Equality Operator"

Strict equality (===) is the counterpart to the equality operator (==). Unlike the equality operator, strict equality tests both the data type and value of the compared elements.

Examples

3 === 3   // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Instructions
Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7 */


// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

/* From Challenge: "Comparison with the Inequality Operator"

The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 != 2      // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
Instructions
Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99 */


// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

/* From Challenge: "Comparison with the Strict Inequality Operator"

The strict inequality operator (!==) is the opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

Examples

3 !== 3   // false
3 !== '3' // true
4 !== 3   // true
Instructions
Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17 */


// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

/* From Challenge: "Comparison with the Greater Than Operator"

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than operator will convert data types of values while comparing.

Examples

 5 > 3   // true
 7 > '3' // true
 2 > 3   // false
'1' > 9  // false
Instructions
Add the greater than operator to the indicated lines so that the return statements make sense. */


function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(110);

/* From Challenge: "Comparison with the Greater Than Or Equal To Operator"

The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than or equal to operator will convert data types while comparing.

Examples

 6  >=  6  // true
 7  >= '3' // true
 2  >=  3  // false
'7' >=  9  // false
Instructions
Add the greater than or equal to operator to the indicated lines so that the return statements make sense. */


function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);

/* From Challenge: "Comparisons with the Logical And Operator"

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return "Yes" if num is between 6 and 9 (6 and 9 included). The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Instructions
Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No". */


function testLogicalAnd(val) {{
  // Only change code below this line

  if (val <= 50 && val >= 25)
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

/* From Challenge: "Comparisons with the Logical Or Operator"

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Instructions
Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside". */


function testLogicalOr(val) {{
  // Only change code below this line

  if (val < 10 || val > 20)
    return "Outside";
}

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

/* From Challenge: "Introducing Else Statements"

When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Instructions
Combine the if statements into a single if/else statement. */


function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else {
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

/* From Challenge: "Introducing Else If Statements"

If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Instructions
Convert the logic to use else if statements. */


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  
  else {
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);

/* From Challenge: "Chaining If Else Statements"

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Instructions
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/


function testSize(num) {
  // Only change code below this line
  if (num < 5){
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num < 20) {
    return "Large";
  }
  else {
  return "Huge";
  }
  // Only change code above this line
}

// Change this value to test
testSize(7);

/* From Challenge: "Golf Code"

In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. */


function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes < 2) {
    return "Hole-in-one!";
  }
  
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  
  else if (strokes == par - 1) {
    return "Birdie";
  }
  
  else if (strokes == par) {
    return "Par";
  }
  
  else if (strokes == par + 1) {
    return "Bogey";
  }
  
  else if (strokes == par + 2) {
    return "Double Bogey";
  }
  
  else {
  return "Go Home!";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

/* From Challenge: "Selecting from many options with Switch Statements" Selecting from many options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which defines various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is a pseudocode example:

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Instructions
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

Helpful Links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
*/


function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val) {
    case 1:
      answer = "alpha";
      break;
      
    case 2:
      answer = "beta";
      break;
      
    case 3:
      answer = "gamma";
      break;
      
    case 4:
      answer = "delta";
      break;
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(2);

/* From Challenge: "Adding a default option in Switch statements"

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
}
Instructions
Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
*/


function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val) {
    case "a":
      answer = "apple";
      break;
      
    case "b":
      answer = "bird";
      break;
      
    case "c":
      answer = "cat";
      break;
      
    default:
      answer = "stuff";
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff("a");

/* From Challenge: "Multiple Identical Options in Switch Statements"

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

Instructions
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

Note
You will need to have a case statement for each number in the range. */


function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
      
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
      
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);

/* From Challenege: "Replacing If Else Chains with Switch"

If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
Instructions
Change the chained if/else if statements into a switch statement. */

//Before


function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);

//After


function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
      
    case 42:
      answer = "The Answer";
      break;
      
    case 1:
      answer = "There is no #1";
      break;
      
    case 99:
      answer = "Missed me by this much!";
      break;
      
    case 7:
      answer = "Ate Nine";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);

/* From Challenge: "Returning Boolean Values from Functions"

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
Instructions
Fix the function isLess to remove the if/else statements. */

// Before


function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);

//After


function isLess(a, b) {
  // Fix this code
return a < b;
}

// Change these values to test
isLess(10, 15);

/* From Challenge: "Return Early Pattern for Functions'

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.

Instructions
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string. */

//Before


// Setup
function abTest(a, b) {
  // Only change code below this line
  
  
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

//After




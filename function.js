/**
 * functions in js : function in js are used to perfrom spefic task
 *
 * syntax for creating functions in js:
 * function(keyword) FunctionName(arguements)
 * {
 *      //function body
 * }
 */

// creating basic function 
function CalculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// driver code starts here
let a = 90,
  b = 89,
  c = 67;

// function calling
let result = CalculateAverage(a, b, c);
console.log("Resultant average is : ", result); // we can directly use this or can do like this

console.log("Average is : ", CalculateAverage(a, b, c)); // the result will be same

/**
 * There is one more function in js called as arrow function, which is introduced in ES6 ECMA script.
 * The arrow function syntax consists of the following parts:

1. Parameters: If the arrow function has multiple parameters or no parameters, you enclose them in parentheses. If there's only one parameter, the parentheses are optional.

2. Arrow (=>) symbol: This separates the parameter list from the function body. It's what distinguishes arrow functions from traditional function expressions.

3. Function body: The expression or statement(s) to be executed by the function. If the function body consists of a single expression, you can omit the curly braces and the return keyword, and the result of the expression will automatically be returned. If the function body consists of multiple statements, you enclose them in curly braces and use the return keyword if you want to return a value explicitly.


Syntax for arrow function
const(keyword) functionName = (arguements) => {
    //function body
}
 */

// sample program to calculate the power of a number usig arrow function with multiple parameter

const PowerCalculation = (base, exponent) => {
  let result = 1;
  while (exponent != 0) {
    result = base * result;
    exponent--;
  }
  return result;
};

// driver code
base = 2;
exp = 3;

console.log("Result is: ", PowerCalculation(base,exp));

// ***********************************************************************************************

// program to print hello using arrow function

const Greet = () =>{
    console.log("Hello")
}


Greet() // function with no parameter

// ***********************************************************************************************

// program to print hello using arrow function

const ShowValue = (num) =>{
    console.log("Hello num = ",num)
}


ShowValue(10) // function with single paramter.

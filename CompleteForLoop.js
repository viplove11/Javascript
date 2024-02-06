// loops in js : are used to perform repititive task
// there are many loops in js:
/**
 * they are :
 * 1. for loop
 * 2. for in loop: which is used to get the keys of the object
 * 3. for of loop : for of loop which is used to display the element present in iterables (like array, string and etc)
 * 4. do-while loop
 * 5. while loop
 *
 */

/**
 * for loop syntax:
 * for(statement 1 (initialisation); statemet 2(condition checking); statement 3 (increament / decreament / step size))
 * {
 * body
 * }
 *
 */

// sample program to print 1 to 100 using loop
let output = "";
console.log("printing 1 to 100: ");
for (let i = 1; i <= 100; i++) {
  output = output + i + " "; // this string is preparing for writing the whole 1 to 100 in one line
  console.log(i);
}
console.log(output); // this statement displays the output in one line



/**
 * for in loop syntax:
 * for(variable in ObjectName(iterable)))
 * {
 *      body
 * }
 *
 */
// sample program for : for in loop which is used to display the key data of the object
let obj = {
  "viplove": 90,
  "harsh": 99,
  "manish": 67,
  "rahul": 80,
  "abhishek": 78,
};
for (let i in obj) { // this loop will return the key of the object
  console.log(i);
}


/**
 * for of loop syntax:
 * for(variable of iterable)
 * {
 *      body
 * }
 *
 */
// sample program for : for of loop which is used to display the element present in iterables (like array, string and etc)
let arr = ["apple", "banana","chickooo"]
for (let i of arr) { 
  console.log(i);
}

// and if in the same program with array if we use in keyword then it will return index of element. 
for (let i in arr) { 
  console.log(i);
}

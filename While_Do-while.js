/**
 * syntax for while loop:
 * 
    * initialization
    * while(condition)
    * {
    *  if condition is true then execute this
    *  increament / decreament 
    * }
 *
 */

// sample program to print 1 to 10 using while loop
let i = 1;
while(i <= 10)
{
    console.log(i)
    i++; // if we did not increament the i , then the loop turns into infinite loop
}

// another example to print factorial of n
let n = 5;
let start = 1
let fact = 1
while(start <= n)
{
    fact = fact * start;
    start++;
}
console.log("Factorial of 5 is : "+ fact)


/**
 * syntax for do -while loop : do while loop is the loop which executes once , whether the condition is true or false.
 * 
 * do {
 *  body of the loop
 * } while(condition);
 * 
 */

// sample program 1 for do-while loop : program to print 1 to 10

let num = 1;
do{
    console.log(num);
    num++;
}
while(num <= 10);

// but if the condition is false then also it executes for once
console.log("Do-while for false condition: ")
let num2 = 20;
do{
    console.log(num2);
    num2++;
}
while(num2 <= 10);

// program for calculating factorial using do while loop:
let Factorial = 1;
let number = 5
let iterate =  1
do{
    Factorial = Factorial * iterate;
    iterate++;
}while(iterate <= number );

console.log("Factorial using do while loop: "+ Factorial)
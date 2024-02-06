/**
 * CONDITIONAL STATEMENT: this are the statement which get executed based on some condition. there several type of conditional statements, they are :
 * 1. if statement
 * syntax: if(condition){
 *              if true then executes this
 *          }
 * 
 * 2. if else statement.
 * syntax:  if(condition){
 *          if condition get true then executes here
 *          }
 *          else{
 *          otherwise executes here
 *          }
 * 
 * 3. if elseif else statement.
 * syntax:  if(condition){
 *          if condition get true then executes here
 *          }
 *          else if(condition 2){
 *          otherwise try for this condition and executes here
 *          }
 *          else {
 *              execute this block
 *          }
 * 
 * */ 


// for taking the input from user, we generally use prompt and it give the data in string type and we need to typecast it 
// prompt we can only use on the browser 
// for taking the input in node.js env we need to create the readline interface
// we can type cast it in various method

// only works in browsers
// let a = prompt("Enter the age of the person: ")
// console.log(typeof a , a ) // type = string and value = inputed_Value


// sample program :
// check for age , if > 18 then valid otherwise not valid for voting

const age = 19
if(age > 18)
{
    console.log("Age is valid for voting.")
}
else{
    console.log("Invalid age")
}


// if age is between 16 -18 allow for e-license, if age ranges between 18  and > then allow for dl

const Age = 90
if(age >= 16 && age <= 18)
{
    console.log("Age is valid for e-license")
}
else if(age > 18)
{
    console.log("valid for dl")
}
else{
    console.log("age is not valid")
}

// switch statement:

const expr = 1

// here switch statement works according to the expression given and execute the case which matches it
switch (expr) {
    case 1:
        console.log("Monday")
        break; // here breaks represent the termination of the particular case and when if this case is not present then execution will continues until it encounters with another break statement.
    case 2:
        console.log("Tuesday")
        break;

    default:
        // this is the default case when no cases matches , then this default case will get executed
        console.log("Default case")
        break;
}

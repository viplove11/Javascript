// use logical operators to find whether the age of the person is lie between 10 and 20 ?
const age = 34;

if (age >= 10 && age <= 20) {
  console.log("Age lies between 10 and 20 ");
} else {
  console.log("AGe does not lies between 10 and 20");
}

// demonstrate the use of switch case
const expr = 1;

// here switch statement works according to the expression given and execute the case which matches it
switch (expr) {
  case 1:
    console.log("Monday");
    break; // here breaks represent the termination of the particular case and when if this case is not present then execution will continues until it encounters with another break statement.
  case 2:
    console.log("Tuesday");
    break;

  default:
    // this is the default case when no cases matches , then this default case will get executed
    console.log("Default case");
    break;
}

// program to find whether the number is divisible by 2 and 3
let num = 60;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisible by 2 and 3 ");
} else {
  console.log("Number is not divisible by 2 and 3");
}

// program to find whether the number is divisible by 2 or 3
let num2 = 67;
if (num2 % 2 == 0 || num2 % 3 == 0) {
  console.log("Number is divisible  by 2 or 3 ");
} else {
  console.log("Number is not divisible by 2 or 3");
}


// print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let PersonAge = 78
// ternary operator syntax: condition? if true : not true
console.log(PersonAge > 18 ? "you can drive" : "You cannot drive")

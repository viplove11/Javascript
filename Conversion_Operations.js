/**
 
 * type conversion : type conversion is the conversion which is used to convert one type of data into another type.
 * But here, js tries to convert all type of value to all types , but it fails to convert in some of the cases, with proper values. As it convert the type but not the actual values as original given value. 

 */

// example
// suppose having a variable
let score = "33"; // converting string to number
console.log(typeof score, score); // here the type is string and value is in string
let NumScore = Number(score); // converting the value in number type
console.log(typeof NumScore, NumScore); // now here it will return type as number and value is 33.

// but in case we chnage the string to 33abc then
let Score2 = "33abc";
Score2 = Number(Score2);
console.log(typeof Score2, Score2); // here the type will get changed but the value will not be 33 , it will NaN(Not a number) value.

// same for undefined
let Score3 = undefined;
Score3 = Number(Score3);
console.log(typeof Score3, Score3); // type will number but return NaN

// and for bool value ,it changes the types but for true it returns 1 and for false it return 0.
// same for object type it returns the value as null and chage its type to number.

let isLoggedIn = true; // define with booleand value
isLoggedIn = String(isLoggedIn);
console.log(typeof isLoggedIn, isLoggedIn); // changes the type to string and return "true" as string

let Name = "viplove"; // string type value
Name = Boolean(Name);
console.log(typeof Name, Name); // change the type to boolean , and return value as true and for string it  will return false as value.


/*

operations:

*/

console.log(2+2) // return addition 
console.log(2-2) // return subtraction
console.log(2*2) // return multiplication
console.log(2**3) // return exponential calculation
console.log(2/3) // return quotient
console.log(2%3) // return remainder

// string concatenation opewrtions : when we add two or more strings , is called as string concatenation.
let string3 = "Hello "
let string1 = "viplove "
let string2 = "parsai "

// spaces are added after string to make them seperatly visible
let stringConcatnate = string3+ string2+string1 // return hello viplove parsai
console.log(typeof stringConcatnate," -> ", stringConcatnate); // type = string 

//  but when we add string with numbers then 
console.log(typeof("1" + 2))// it returns 12 as value but its type = string
console.log("1" + 2)// it returns 12 as value
console.log(typeof ("1" + null))// it returns 1null as value, but type = string

// if first arg type = string and then any type is added to it then it will get convert into string 
console.log("2"+2+2) // return type = string but val = 222 but
console.log(typeof(1+2+2+"2")) // return type = string but val = 52


// prefix operator (++a ) -> here the value of variable get increament first and then get stored
// prefix operator (a++ ) -> here the value of variable get stored first and then get increamented.
let a = 90
console.log(a++) // now if we print the value of a then it will be 91
console.log(a)

console.log(++a) // here value get increamented first , and the value get stored

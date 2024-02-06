// write a program to print the marks of the student in an object using for loop
const ObjectVar = {
  viplove: 90,
  Harsh: 99,
  Rohit: 89,
  Amit: 56,
};

// console.log(Object.keys(ObjectVar).length) // basically this statement is used to find out the length of the OBjectVar ,as it use object class keys method which calculate the number of key in a specified object
// Object.keys(ObjectVar) this return array of keys
for (let i = 0; i < Object.keys(ObjectVar).length; i++) {
  console.log(
    "Marks of ",
    Object.keys(ObjectVar)[i],
    " is: ",
    ObjectVar[Object.keys(ObjectVar)[i]]
  );

  //   basically in above log statement we are printing the key of object using Object.keys(ObjectVar)[i] ( this will array of key , where i represent the position of each element in array) and using this whole as a key , we have found out the value of respective key  "ObjectVar[Object.keys(ObjectVar)[i]]" using this.
}

// *************************************************************************************************************************************
// write the program in q1 using for in loop?
console.log("2nd program execution");
const ObjectVar1 = {
  viplove: 90,
  Harsh: 99,
  Rohit: 89,
  Amit: 56,
};

for (let i in ObjectVar1) {
  console.log("Marks of ", i, " is : ", ObjectVar1[i]);
}

// *************************************************************************************************************************************
// write the program to print try again until user get the correct number.

/**
 * approach for this is :
 * 1. generate a random number using math class
 * 2. then write a loop to check for inputted number = random number, other wise print try again
 */

let inputtedNumber;
let RandomNumber = Math.floor(Math.random()*100)

while(true)
{
    // below lines will error if you are working on node.js env , but executes on repl or browser js engine
    // inputtedNumber = prompt("Enter number: ")
    inputtedNumber = Number.parseInt(inputtedNumber)
    if(inputtedNumber == RandomNumber)
    {
        break;
    }
    else{
        console.log("try again")
    }
}

// *************************************************************************************************************************************
// program to find mean using function , arrow function

function MeanCalci(num1, num2, num3, num4, num5) {
  return (num1 + num2 + num3 + num4 + num5) / 5;
}

// using arrow function
const MeanCal = (num1, num2, num3, num4, num5) => {
  return "Mean of 5 number is : " + (num1 + num2 + num3 + num4 + num5) / 5;
};

let num1 = 90,
  num2 = 89,
  num3 = 78,
  num4 = 67,
  num5 = 90;
console.log("Mean is: ", MeanCalci(num1, num2, num3, num4, num5));
console.log(MeanCal(num1, num2, num3, num4, num5));
// *************************************************************************************************************************************

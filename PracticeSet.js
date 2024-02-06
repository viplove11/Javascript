// creating a var of type string and try to ad  number to it
let StringVar = "viplove"
let IntegerVar = 11

console.log(typeof(StringVar + IntegerVar), (StringVar+IntegerVar)) // here the type = string and value is "viplove11"

// create a const variable and try to change the value of it
const a = "viplove" // constant variables are variables which dont allow to change thier value
a = "parsai" // give an error here
console.log(a)

// create a dictionary of 5 words - meaning
const dict = {
    yakka : "hard work",
    appreciation : "understanding and enjoyment of the value of something",
    apple:"a fruit name, red in colour mostly"
}

console.log(dict) // this will simnple print the dictionary 
console.log(dict.yakka) // print the meaning of the particulr dict key.

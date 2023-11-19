// TypeScript Data Types
// In TypeScript, we will be working with two main categories of data types: text and numbers.
// The main difference between the two is that the computer can perform arithmetic operations on numbers, but not text.
// We will also be working with Boolean

// Text types: string
// Numeric types: number (decimals and whole numbers are both encompassed, unlike python which uses int and float to distinguish the two)
// Boolean types: boolean (true or false)

// For example,
let number:number=1;
let text:string="1";
console.log(number + 1); // ok.
console.log(text + 1); // error.

// To check the variable type, we print (typeof variableName)
console.log(typeof text);
// Output: string

// TypeScript Text (Strings)
// Words and text are formed from strings of characters, hence the name "string"
// Strings must be encased in quotation marks, either single quotes ('') or double quotes ("") but never mix-matched (ie '")
// Numbers encased in a string are not the same as those with data type number. For example,
// let x = 4 isn't the same as let x = "4"

// TypeScript Numbers
// Numbers consist of digits spanning from 0-9. Numbers cannot include letters, spaces or special characters.
// Hyphens (-) indicate negative numbers
// Periods (.) indicate a decimal point

// Boolean Values
// Booleans are neither strings or numbers, but rather indicate a state of being
// They can only either be true or false
// For example, evaluating an expression can return true or false
// Booleans are best used for conditional statements, which we will learn later

let firstVar = 10;
let secondVar = 20;
let thirdVar = '10';

console.log( firstVar == 10 ); // true
console.log( firstVar == secondVar); // false
console.log(firstVar == thirdVar); // true
console.log(firstVar === thirdVar); // false

// '==' operator checks only if the values are equal or not
// '===' operator checks if both the values and the types are equal
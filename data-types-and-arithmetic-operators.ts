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

// Type Casting/Assertions in TypeScript
let someValue: any = 'This is a random string';
let knownString = <string> someValue; // string type casted with <>
let sameThing = someValue as string; // string type casted with 'as' operator

// TypeScript Operators

// Arithmetic Operators
// + Addition
// - Subtraction
// * Multiplication
// ** Exponentiation (x**y = x to the power of y)
// / Division
// % Modulus (returns the remainder of a division)
// ++ Increment (increment the value of the variable by 1)
// -- Decrement (decrement the value of the variable by 1)

// Comparison Operators
// '==' operator checks only if the values are equal or not
// '===' operator checks if both the values and the types are equal
// '!=' operator only checks if the values are not equal
// '!==' operator checks if both the values and the types are not equal
// '>' greater than (values)
// '<' less than (values)
// '>=' greater than or equal to (values)
// '<=' less than or equal to (values)

// Types of Errors

// Syntax Errors
// for example, missing semi-colon
let x: number = 10
console.log(x) 
// Type Errors
// for example, mismatched type error
let x: number = 10;
let y: string = "Hello";
x = y
// Logic Errors
// for example, doesn't make sense
let x: number = 10
let y: number = 12
let sum: number = y-x // this is a difference, not a sum

// Exercise Problems
// 1. True or False?
let x: number = 12
let y: string = "12"
// i) console.log(x === y);
// ii) console.log(x == y);
// iii) console.log(x != y);
// 2. Find the average of this set of numbers: 230, 45, 995, 37. Use variables to store any data. Print a therefore statement.
// 3. Find the length of the following using type casting and length function. Print a final statement. 
let someValue: any = "You are going to infiltrate the leaf disks with sodium bicarbonate solution by removing most of the air from the leaf tissue and replacing it with the sodium bicarbonate solution.";

// Answers
// 1. i) false ii) true iii) false
// 2. 
let num1: number = 230;
let num2: number = 45;
let num3: number = 995;
let num4: number = 37;
let average: number = (num1+num2+num3+num4)/4;
console.log("Therefore, the average in the set of numbers is", average);
// 3.
let someValue: any = "You are going to infiltrate the leaf disks with sodium bicarbonate solution by removing most of the air from the leaf tissue and replacing it with the sodium bicarbonate solution.";
let stringLength = (someValue as string).length as number;
console.log("The length of the sentence is", stringLength);

// 02.02.01
console.log(2*3);
console.log(2+3*5);
console.log((2+13)/5);
console.log(2**5);
console.log(7/3-1);
console.log((7-12)/(6-1));

// 02.02.02
const pi:number=3.14;
let radius:number=15;
let circumference:number=2*pi*radius;
console.log(circumference);
console.log("The circumference is", circumference, "cm.")

// 02.02.03
let jump1:number=3.3
let jump2:number=4
let jump3:number=3
let averageJump:number = (jump1+jump2+jump3)/3
console.log("The athlete's average jump length was", averageJump, "m.")
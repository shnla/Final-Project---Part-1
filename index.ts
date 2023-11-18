// TypeScript Introduction

// TypeScript is an enhanced programming language that is a superset of JavaScript, meaning that it does everything JavaScript does and more: mainly using types. Typscript files and JavaScript files are easily interchangeable, allowing us to write TypeScript code in development and then easily compile it into JavaScript to run.

// Code/Coding
// Code is anything written in programming language to provide instructions to a computer. 
// Coding refers to the act of writing code on apps known as code editors. There are many different code editors but for this class, we will be using replit.com or VS code to code in TypeScript.
// VS code can be downloaded on your personal device, but not on school computers
// do NOT leave code on replit
// If someone finds your code and submits it as their own, it is considered plagiarism and everyone involved will receive a 0 and a call home

// Printing to console; Our First TypeScript Program
console.log("Hello World");

// TypeScript Comments
// Comments are text in the code that are not displayed when the program is run
// Comments are used unlimitedly as notes to give context to both others and yourself as to what the code does

/* Typescript has
Multiline comments for 
larger blocks of text
denoted by /* */

// as well as single line comments denoted by "//"

// Syntax in TypeScript:
// ; (semi-colon) to end a line
// () to signify parameters for a method
// { } to signify a code block

// Indentation refers to the spaces at the beginning of a code line
// For example,
// if (...) {
//   console.log("...") exists only within the conditional statement
// }

// Why syntax matters
// Syntax is the set of rules dictating how a programmer should structure their code. It's important to follow this set of rules in order to properly communicate your intended meaning to both the computer and other people looking at your code.

// TypeScript Variables
// Variables store information for later use, and can change or stay the same
// A variable is represented by a variable name that should briefly explain the information it stores
// For example,
// y <- error, no value assigned to y so TypeScript doesn't know it's a variable
// console.log(y);

// TypeScript is a strongly/statically typed language, meaning that the variable can be declared with a type, and can therefore only be assigned values of that type. This allows the program to catch errors before run time. 
// Key words to declare a variable: var, let, const
// 1. Var
// Var variables are only available within the function.
// If they are declared outside the function, they are global variables available everywhere
// If defined inside a code block, they are limited to the enclosing function in which it was defined
// Var variables type and value can be updated or redefined
// 2. Let
// Let variables are only available within the block in which they were declared
// If they are declared outside the function, they are global variables available everwhere
// If defined inside a code block, they are limited to the code block
// Let variables cannot be redeclared but they can be reassigned a value
// for example,
// let message:string="hello";
// let message:string="bye"; <- error.
// message = "bye"; <- ok.
// 3. Const
// Const variables can't change its value, so it must be assigned one to initialize
// Const variables cannot be updated or redeclared, but you can assign new values to the PROPERTIES of the variable
// for example,
// const constVar = {name: "Bob"};
// constVar = 1.5; <- error
// constVar.name = "George"; <- ok because name is a property of constVar
// Const variables have the same scope as let variables, meaning block scope
// Use for values that you know will never change, for example: const PI:number=3.14;

// Scope Example
var globalVar="..."; // accessible everywhere
let globalLet="..."; // accessible everywhere

function someFn() {
  if (true)
  {////////////////////////////////////////////////////////////
    var localVar="...";
    console.log(localVar); // ok, accessible within function
    let localLet="...";
    console.log(localLet); // ok, accessible within code block
  }////////////////////////////////////////////////////////////
  
  console.log(localVar); //ok, accessible within the function
  console.log(localLet); // error, outside of code block
}
console.log(localVar); //error, outside of function
console.log(globalVar); //ok

// Redeclaring: to change the variable type. Examples:
var example: number = 1
var example: string = "one" // ok. but generally discouraged as it may cause confusion

let letVar:number=2
let letVar:string="two" // error.

// There are four ways we can declare the variable
// 1. Declare both type and data value
var employeeName:string="John"; // string is the type, John is the initial value
// 2. Declare only the type
var employeeName:string; // type is initialized, no value unless assigned one
// 3. Declare only the value
var employeeName="John"; // type inference infers the type based on the given value, value is initialized
// 4. No type, no value
var employeeName; // Defines the variable name, no type or value until assigned one

// TypeScript Variable Rules
// Use variable names that you can pronounce and that relate to the data it holds
// Variable names must start with a letter, an underscore (_) or a dollar sign ($)
// Variable names cannot start with a number
// Variable names are case sensitive, meaning firstName and FirstName are considered different variables
// Use camel case: each word, except the first, starts with a capital letter
// For example, var firstName;

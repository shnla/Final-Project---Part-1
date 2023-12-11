// Statements
// A statement is an instruction that the computer can read and execute. Some examples of statements we will be working with is if statements, while statements and for statements, mainly focusing on if statements.

// Expression
// an expression is a combination of values, variables, operators and calls to functions that the computer needs to evaluate

// Evaluating an Expression
// evaluating an expression produces a value
// variables in of themselves are simple expressions that will produce the value it holds

// If Statements use these expressions as conditions
// "if" lets the computer make decisions based on some given conditions
// if (condition){
//   do this under the condition that...; <- indent means it's a code block inside the function. if the condition is not met, this will not run
// } <- end of code block
// do this anyway; <- since it's outside of the if function, it will run regardless if the condition is met or not)

// Else
// when the if statement conditions are not met, code indented under the else key word will run
// must be run with at least an if statement (cannot be stand alone). May run with or without the else if statement. There can only be one "else" per "if"

// Else If
// "else if" keyword checks its condition if the previous condition was not met
// must be run with at least an if statement (cannot be stand alone) and theres no limit to how many times it can be used under one "if"
// for example,
const x = 4
const y = 4
if (x<y) {
  console.log(`${x} < ${y}`);
}
else if (x>y) {
  console.log(`${x} > ${y}`);
}
else {
  console.log(`${x} = ${y}`);
}

// TypeScript Logical Operators
// logical operators are used to combine conditional statements

// let x = 9
// let y = 4

// && <- 'and' operator: returns true if both statements are true
// example: (x < 10 && y > 1)

// || <- 'or' operator: returns true if either statements are true 
// example: (x > 10 || y == 4)

// ! <- 'not' operator: returns true if the expression is false
// example: !(x<y)

// Conditional (Ternary) Operator
// This operator will assign some value to the variable depending on the condition

// Syntax:
// variableName = (condition) ? valueIfTrue:valueIfFalse
let age = 17
let canVote = (age >= 18) ? "old enough":"too young"
// canVote = "too young"

// Nested Ifs
// You can have if statements inside if statements. For example,
number = 50
if number<1000 {
  if number<500 {
    console.log("less than 500");
  }
  else {
    console.log("more than 500 but less than 1000");
  }
else {
  console.log("more than 1000")
}
}
// Practice
// 1. Write a TypeScript code that prints true if a number is even and false otherwise. Use an if statement to check for evenness.
// 2. Write a TypeScript program that simulates a traffic light system. Declare a variable representing the current colour of the traffic light. Use if statements to display appropriate messages for each colour.
// 3. Write a TypeScript program that checks if a given number is a perfect square. If it’s not a perfect square, indicate so and find the nearest one. State the base.

// 1.
if (number%2 === 0) {
  console.log("true");
}
else {
  console.log("false");
}

// 2.
let light = "red";

if (light == "red") {
  console.log("Red light, stop!");
}
else if (light == "yellow") {
  console.log("Yellow light, slow down!");
}
else if (light == "green") {
  console.log("Green light, go!");
}

// 3.
const number = 70;
let root = Math.sqrt(number);

if (root % 1 != 0) {
  let lowerSquare = Math.floor(root)**2;
  let higherSquare = Math.ceil(root)**2;
  let nearestSquare = (number-lowerSquare < higherSquare-number) ? lowerSquare:higherSquare;
  console.log(`Not a perfect square\nNearest perfect square: ${nearestSquare}\nBase: ${Math.sqrt(nearestSquare)}`);
}
else {
  console.log(`Perfect square\nBase: ${root}`);
}





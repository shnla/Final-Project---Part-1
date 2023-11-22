// Functions
// functions compartmentalize your code into smaller tasks that will only run when called upon. They can be called multiple times, and in multiple different places.
// functions reduce the amount of code written when you have to repeat a task, thereby increasing efficieny
// lines indented under the function definition are encapsulated within the function. Code that is not indented under the function definition will be outside of it.
// you can pass data into functions as parameters
// functions can store values with the return function

// CREATING A FUNCTION
// In TypeScript, functions are defined using the "function" keyword
function functionName() {
  console.log("Hello from inside the function");
}
console.log("Hello from outside the function") // unindented
functionName(); // calling the function. Without this, it will not run.

// Do not define a function inside of a function. 
// However, you can call functions inside of other functions

// NOOOOOOOOOOOOOOO
function normalFunction() {
  console.log("hm");
  function whatAreYouDoingHere() {
    console.log("absolutely do not do this");
  }
}
// It will work but DOOOOONNNNNTTTT

// ARGUMENTS/PARAMETERS
// are data passed to the function to be used inside the function, and can ONLY be used inside the function (local scope)
// parameter name + type should be specified inside the brackets after the function name
// have as many parameters as you want, but separate them with a comma

function greeting(name:string) {
  console.log("hello " + name);
}
greeting("Shelena"); // the function will expect exactly 1 parameter of string type. Otherwise won't work. However many parameters you define, you must enter that many number of data values when calling it.
// Output: hello Shelena

function names(colour1:string, colour2:string, colour3:string) {
  console.log("My favourite colour is " + colour3);
}
names("red", "orange", "blue"); // the order in which you enter your parameters will correspond to the parameters in the order they were defined
// for example: colour1: "red", colour2: "orange", colour3:"blue"

// Return Values
// a function can act as a variable by returning/storing a value. For example,

function sum(number1:number, number2:number) : number { // the ': number' specifies the datatype of the returned value
  return number1+number2;
}
sum(5,10); // running this won't show anything in the console. this is only returning a value that can be used. It is currently not being used. you need to print it to console for it to show.
console.log(sum(5,10)); //Output: 15

// Recursion
// calling a function within itself. Under conditions, it allows the function to loop until a base case is reached, where it can no longer loop any further. it will then evaluate the code with the values from each iteration.

function recursion(num:number) {
  if (num > 1) {
    var result:number = num - recursion(num-1);
    console.log(result);
  }
  else {
    var result: number = 1;
  }
  return result;
}
recursion(5);

// Exercise Problems
// 1. Write a TypeScript function that takes a number as a parameter and returns the square of that number.
// 2. Write a TypeScript function that takes a number as a parameter and returns true if the number is positive and false otherwise.
// 3. Write a TypeScript function that takes two numbers as parameters and returns the average of those numbers.


// Solutions
//1.
function square(num:number) {
  return num**2;
}

// 2.
function checkPositive(num:number) {
  return num>0;
}

// 3.
function average(num1:number, num2:number) {
  return (num1+num2)/2;
}
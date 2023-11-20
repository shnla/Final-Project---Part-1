// Input
// Unlike Python, TypeScript does not have a built-in function for getting user input. However, as a superset of JavaScript, we will be using in conjunction JavaScript's prompt function to handle user input
// Example for doing this in VS Code:
// npm install prompt-sync (terminal)
import * as promptSync from 'prompt-sync'
const prompt = promptSync();
const userInput = prompt("Some prompt");
console.log("You entered", userInput);
// tsc ./path/way/fileName.ts (terminal)
// node ./path/way/fileName.js (terminal)

// in case of error:
// npx tsc (terminal)
// node dist/fileName.js

// Type
console.log(typeof userInput);

// Floor Division
let floorDivision = Math.floor(3/2);

// Modulos
let modulos = 3%2

// Math Functions
Math.max(1,57,2,3) // returns the highest number value in a set of numbers
Math.min(1,57,2,3)

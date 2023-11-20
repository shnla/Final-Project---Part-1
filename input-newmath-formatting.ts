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
let modulos = 3%2;

// Math Functions
Math.max(1,57,2,3); // returns the highest number value in a set of numbers [57]
Math.min(1,57,2,3); // returns the lowest number value in a set of numbers [1]
Math.round(1.5); // rounds the number to the nearest whole number [2]
Math.ceil(1.001); // returns the smallest integer greater than or equal to the number [2]
Math.floor(1.99); // returns the smallest integer less than or equal to the number [1]
Math.pow(x,y); // returns x to the power of y
Math.PI; // returns the mathematical constant, pi = 3.14159...

// Rounding to decimal places
// x.toFixed(y) returns x as a STRING rounded to y decimal places
let x = 1.566555;
console.log(x.toFixed(2)); // 1.57

// Formatting variables within text
// You can insert variables into a string by replacing quotation marks with `` and encapsulating the variable like this: ${variableName}. For example,

let name = "Shelena";
console.log(`Hello, my name is ${name}.`);

// anything within the curly braces is a placeholder for what will appear when the code is run
// you can have inside the curly braces: a variable, a calculation, or a combination of both. For example,
let bags = 5;
let price = 0.13123;
console.log(`The cost for your bags is $${(bags*price).toFixed(2)}.`);

// TypeScript can use JavaScript's Internationalisation API (Intl) to format numbers
const number = 10000.01
console.log(new Intl.NumberFormat("en-GB").format(number)); // 10,000.01 IF in US English locale (default, otherwise use "en-GB")

// Using different locales
("de-DE"); // German locale uses commas for decimals and periods for thousands [10.000,01]
("ar-EG"); // Arabic locale uses real Arabic digits
("zh-Hans-CN-u-nu-hanidec"); // Chinese locale uses real Chinese characters

// Formatting currencies
// set the style to currency, then choose the currency type. this should match the locale.
// for example, US English should use USD currency, not EUR
console.log(new Intl.NumberFormat("en-GB", { 
  style: "currency",
  currency: "USD" 
}).format(number)); 

// Other locales, their respective currency
// "ja-JP", "JPY" <- Japanese yen don't use a minor unit of currency (no cents)
// "de-DE", "EUR" <- Germany uses euros

// Formatting percentages
// Setting style to "percent" will format the number into a percentage. To specify decimal places, use minimumFractionDigits and maximumFractionDigits
console.log(new Intl.NumberFormat("en-GB", { 
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 2
}).format(0.953432)); // 95.34%
// Note: anything above 1 will be more than 100% because 1 is a full 100%.
// P.S. Formatting anything will turn it into a string type.

// Escape Characters 
// \n  - new line
// \t  - tab
// \'  - single quote
// \"  - double quote
// \\  - single backwards slash
// \/  - single forwards slash


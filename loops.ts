// Loops
// Loops allow the user to run a block of code as many times as they want. TypeScript supports the following loops:
// while loop
// for loop
// for ...of loop
// for ...in loop

// WHILE LOOPS
// the while loop checks for the condition before running the code block. It will continue to check the condition and run the code so long as the condition is true. The loop will break when the condition is evaluated false. For example,
let x: number = 1
while (x<4) {
    console.log(x);
    if (x == 2)
      continue; // if x is 2, it will restart the loop. x will not have been incremented and it will stay in this loop forever
    else if (x == 3)
      break; // if x is 3, even though it's less than 4, the loop will break
     x++;
}
// without the increment to change the value of x, the condition will forever evaluate true
// break statement will force the computer to exit the loop. else statements will not be evaluated if the loop is broken before then.
// continue statement will force the loop to restart to the next iteration

// FOR LOOPS
// are used to iterate through a sequence (a number range, a string, a list, etc), so for a fixed number of times
// code in for loops can be applied to each element in the sequence
// Different typees of for loops: for loop, for ... of loop, for ... in loop

// TYPES
// for loop: loops for a given number of times, specified by a condition
for (let i = 0; i < 3; i++) {
  console.log ("Loop number" + i);
}
// i = 0
// i<3 (i in range of 3)
// i++ (each loop increments i by 1)

// for ... of loop: iterates through elements of a sequence, giving you the value of the element (ie. array, list, string)
const str = "This is a sentence."
for (var char of str) {
  console.log(char);
}
// var char initializes a variable for each letter(element) in the string
// console.log(char) prints a single letter each loop. eventually it will print all the letters in the string and the loop will end

// for ... in loop: iterates through elements of a sequence, returning to you the INDEX of the element
const arr = [1,2,3,4]
for (var index1 in arr) {
  console.log(index1) // output: 0, 1, 2, 3
}
console.log(index1) // ok, declared with var. Output: 3
// console.log(index1 declared with let) // Compile error, variable index1 is not defined.

// var index1 initializes a variable for each iteration of the loop. it represents the index. index starts at 0
// you may also choose to initialize with let. the difference is that variables declared with let won't be accessible outside of the loop


// Nested Loops
// a loop inside a loop
// inner loop will finish looping a cycle for every one iteration in the outside loop. For example,
for (let i=0; i<4; i++) {
  for (let j=0; j<3; j++){
    console.log(j);
  }
}
// Output: each row is an iteration in the outside loop. inside loop iterations are separated by a comma
// 1,2,3 < Outside loop iteration #1
// 1,2,3 < Outside loop iteration #2
// 1,2,3 < Outside loop iteration #3
// 1,2,3 < Outside loop iteration #4

// Practice Problems
// 1. Print the digits of the number 43589. Use a for of loop.
// 2. Find the sum of the digits in 32941.
// 3. Print the 9 times table using a loop.


// Solutions
// 1. 

const num = '43589';
for (var digit of num) {
  console.log(digit);
}

// 2.
const num = '32941';
var sum = 0;
for (var digit of num) {
  sum = sum+parseFloat(digit);
}
console.log(sum);

// 3.
const num = 9;
for (let i=1; i<=9; i++) {
  for (let j=1; j<=i; j++) {
    console.log(`${i} x ${j} = ${i*j}`);
  }
}
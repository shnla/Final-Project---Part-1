// TypeScript Collections
// Working with larger sets of data using only one variable to store the collection of data
// that variable is known as an array

// TypeScript Collection Types

// INDEXED COLLECTIONS
// data set ordered by indexes and can be accessed by the index
// an index: position of data. We always start counting index at 0.

// Array: denoted by []. Can be a mix of different data types like numbers and strings. Values are separated with a comma. Access individual data by using its index.
let arr = [1,2,'hello'];
console.log(arr[0]); // Access: arrayName[index#]
// Unlike Python, TypeScript does not have a built-in function to access values from the back of the array. You would have to code a loop to do that.
// Output: 1

// Array Methods
// Arrays are mutable, meaning that its elements can be changed: deleted, added, moved, etc.
console.log(arr.length) // .length returns the length of the array.
const lastElement = arr.pop(); // pop function returns and removes the last element in an array
const firstElement = arr.shift(); // shift function returns and removes the first element in an array
delete arr[/*index*/]; // delete will remove an element in an array by its index
arr.push(32,1); // adds a value to the end of the array. can push multiple values in one line
// arr.length = 3
// lastElement = 'hello' -> arr = [1,2]
// firstElement = 1 -> arr = [2]
// arr.push(32,1) -> arr = [2, 32, 1]

// indexOf method returns the index of a given value
const arr = ["walk the dog", "go shopping", "exercise"];
const index = arr.indexOf("walk the dog") // arrayName.indexOf(value)
// Output: 0
// You can use the index to reassign its value using the Splice method.

// Splice method: reassign a new value/delete an existing element. Needs the element index.
const index = 2; // "exercise"
const value = "go to the pharmacy";
arr.splice(index, 1, value); // delete '1' element at 'index' (exercise), adds 'value' (go to pharmacy) to the right of 'index'
// splice(index of element, number of elements to delete to the right (including the current element index), value to insert right of index)
console.log(arr); // "walk the dog", "go shopping", "go to the pharmacy"


// KEYED COLLECTIONS
// data set ordered by keys instead of indices. 
// Two types of keyed collections: Map and Set

// Map: equivalent of python dictionaries
let myMap = new Map();
myMap.set("key", "value"); 
let mapValue = myMap.get("key"); // returns the value associated with the given key
console.log(mapValue);
// Output: value
// Keys and values don't have to be string: they can be numbers, or other data types. You can mix and match the key data type and the value data type

// Map Methods: a few examples. there exists many more.
myMap.clear(); // Remove all existing key-value pairs
myMap.delete('key'); // Deletes the given key pair and returns True if it exists. Returns false if it doesn't exist within the map
iterator = myMap.entries(); // Returns an iterator that contains all key-value pairs. Can be iterated through using iterator.next().value
keys = myMap.keys(); // Returns an iterator containing only the keys
values = myMap.values(); // Returns an iterator containing only the values


// Sets: similar to an array, but cannot add repetitive values
let mySet = new Set();
mySet.add("apple");
mySet.add("orange");
mySet.add("apple");
// Output: { 'apple', 'orange' }

// Set Methods: a few examples, there exists many more
mySet.clear(); // clears all values in the set. trying to print this will give undefined
mySet.size(); // returns the length of the set. Printing this after clearing will return 0
mySet.delete("value"); // deletes in the set the "value" passed in
mySet.entries(); // returns an iterable object similar to a map. each value's key is the same as its alue
mySet.keys(); // returns an iterable object of all the values
mySet.values(); // does the same as the above. basically the keys in a set are equal to its values
mySet.has("something") // returns true if the "something" is in the set, false if not

// Practice Problems
// 1. Filter the odd numbers in a given array and print the odd array to console.
// 2. Find the middle element of an array and replace it with "0". If there isn't a middle, insert it so that it's in the middle.
// 3. Find the average of an array of numbers to two decimal places.


// Solutions 
// 1.
const numbers = []; // list full of numbers
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers); 

// 2. 
const arr = [];
let index = Math.floor(arr.length/2);
if (arr.length%2 === 0) {
  arr.splice(index,0,0);
}
else {
  arr.splice(index,1,0);
}
console.log(arr);

// 3. 
const numbers = []
if (numbers.length === 0) {
  console.log("empty list"); // Avoid division by zero for an empty array
}
else {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  console.log(average.toFixed(2))
}

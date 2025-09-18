/*
    JavaScript Data Type Methods
    ============================
    JavaScript provides built-in methods for different data types.
    These methods help us manipulate and work with data easily.
    Let's look at some common data types and their useful methods.
*/

// 1. String Methods
let greeting = "Hello, World!";

// .length - returns the length of the string
console.log(greeting.length); // 13

// .toUpperCase() - converts string to uppercase
console.log(greeting.toUpperCase()); // "HELLO, WORLD!"

// .toLowerCase() - converts string to lowercase
console.log(greeting.toLowerCase()); // "hello, world!"

// .includes() - checks if a substring exists in the string
console.log(greeting.includes("World")); // true

// .replace() - replaces part of the string with another string
console.log(greeting.replace("World", "JavaScript")); // "Hello, JavaScript!"

// 2. Number Methods
let num = 123.456;

// .toFixed() - formats number with fixed decimals (returns a string)
console.log(num.toFixed(2)); // "123.46"

// .toString() - converts number to string
console.log(num.toString()); // "123.456"

// 3. Array Methods
let fruits = ["apple", "banana", "cherry"];

// .push() - adds an item to the end of the array
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "cherry", "orange"]

// .pop() - removes the last item from the array
fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]

// .join() - joins array elements into a string
console.log(fruits.join(", ")); // "apple, banana, cherry"

// .indexOf() - finds the index of an item
console.log(fruits.indexOf("banana")); // 1

let numbers = [1, 2, 3, 4, 5];

// .push() - adds an item to the end of the array
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// .pop() - removes the last item from the array
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// .slice() - returns a portion of the array
console.log(numbers.slice(1, 4)); // [2, 3, 4]

// .splice() - adds/removes items from the array
numbers.splice(2, 1, 99); // removes 1 item at index 2 and adds 99
console.log(numbers); // [1, 2, 99, 4, 5]

// .shift() - removes the first item from the array
numbers.shift();
console.log(numbers); // [2, 99, 4, 5]

// .unshift() - adds an item to the beginning of the array
numbers.unshift(0);
console.log(numbers); // [0, 2, 99, 4, 5] 
  
// 4. Object Methods
let person = {
    name: "Alice",
    age: 25
};

// Object.keys() - returns an array of property names
console.log(Object.keys(person)); // ["name", "age"]

// Object.values() - returns an array of property values
console.log(Object.values(person)); // ["Alice", 25]

// Object.entries() - returns an array of [key, value] pairs
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25]]

// 5. Boolean Methods
// Booleans don't have many methods, but you can convert values to boolean using Boolean()
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true

// 6. Array Iteration Methods

/*
    These are just a few examples of methods available for different data types in JavaScript.
    You can explore more methods in the official documentation or by using console.log() to inspect objects.
*/
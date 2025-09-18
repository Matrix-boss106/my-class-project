/*
JavaScript Data Types

1. String
    - Text data, written in quotes.
    Example:
*/
let name = "Alice";

/*
2. Number
    - Numeric values, can be integers or decimals.
    Example:
*/
let age = 25;
let price = 19.99;

/*
3. Boolean
    - True or false values.
    Example:
*/
let isStudent = true;

/*
4. Undefined
    - A variable that has been declared but not given a value.
    Example:
*/
let score;
console.log(score); // undefined

/*
5. Null
    - Represents no value or empty.
    Example:
*/
let car = null;

/*
6. Object
    - Used to store collections of data.
    Example:
*/
let person = {
  firstName: "John",
  lastName: "Doe"
};

/*
7. Array
    - A type of object for storing lists.
    Example:
*/
let colors = ["red", "green", "blue"];

/*
8. Symbol (advanced)
    - Unique and immutable value, used for object keys.
    Example:
*/
let id = Symbol("id");

// Understanding these data types is crucial for effective programming in JavaScript. Each type serves a different purpose and helps you manage and manipulate data in your applications.

// datatypes classification
// Primitive types: String, Number, Boolean, Undefined, Null, Symbol
// Non-primitive types: Object, Array, Function

// Primitive types are immutable (cannot be changed), while non-primitive types are mutable (can be changed).

// meaning of mutable and immutable

// Mutable: Data that can be changed after it is created. Example: Objects and Arrays.
// Immutable: Data that cannot be changed after it is created. Example: Strings, Numbers, Booleans, Null, Undefined, Symbols.

// example of mutable and immutable
let mutableArray = [1, 2, 3];
mutableArray.push(4);
console.log(mutableArray); // Output: [1, 2, 3, 4]

let immutableString = "Hello";
immutableString[0] = "h";   // This won't change the string
console.log(immutableString); // Output: "Hello"

// In summary, understanding JavaScript data types helps you write better code by allowing you to choose the right type for your data and understand how to manipulate it effectively.  


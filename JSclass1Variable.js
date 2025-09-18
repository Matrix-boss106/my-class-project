// // Variable definitions in JavaScript
// A variable in JavaScript is a named container for storing data values. You can think of it as a labeled box where you keep information you want to use later.

// Here's a simple example:

// Explanation:
//  Using 'let', 'const', and 'var' to declare variables

// Declaring a variable using 'let'
let age = 25;

// Declaring a variable using 'const' (value can't change)
const name = "Alice";

// Declaring a variable using 'var' (older way, not recommended)
var isStudent = true;

// what is the difference between let, const, and var?
// 'let' allows you to declare variables that can be reassigned later.
// 'const' is used for variables that should not be reassigned after their initial assignment.
// 'var' is function-scoped and can lead to unexpected behavior due to hoisting, so it's generally better to use 'let' and 'const'.

// You can use these variables later in your code:
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(isStudent); // Output: true

// but what's the point of variables?
// Variables are useful because they allow you to store and manipulate data in your programs. Instead of hardcoding values, you can use variables to make your code more flexible and easier to read.   
// For example, you can change the value of 'age' later in your code:
age = 26;
console.log(age); // Output: 26
// benifit of using variables is that if you need to update a value, you only have to change it in one place (where the variable is defined) rather than everywhere that value is used in your code.
// This makes your code easier to maintain and understand.
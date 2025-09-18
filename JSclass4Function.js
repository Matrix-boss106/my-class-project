// Functions in JavaScript allow you to group code into reusable blocks.
// You can "call" a function whenever you want to run that block of code.

// 1. Function Declaration
// This is the most common way to define a function.
function greet() {
    // This code runs when the function is called.
    // console.log prints text to the Output pane or terminal in VS Code.
    console.log("Hello, welcome to JavaScript functions!");
}

// To run the function, use its name followed by parentheses:
greet(); // Output: Hello, welcome to JavaScript functions!

// 2. Function with Parameters
// You can pass information into a function using parameters.
function add(a, b) {
    // 'a' and 'b' are parameters (placeholders for values you provide)
    // The function returns the sum of a and b.
    return a + b;
}

// Call the function with actual values (arguments):
let sum = add(5, 3); // sum is now 8

// 3. Function Expression
// You can also define a function and assign it to a variable.
const multiply = function(x, y) {
    return x * y;
};

let product = multiply(4, 6); // product is 24

// 4. Arrow Function (ES6+)
// A shorter way to write functions using the '=>' syntax.
const subtract = (x, y) => {
    return x - y;
};

let difference = subtract(10, 4); // difference is 6

// 5. Returning Values
// Functions can return values using the 'return' keyword.
// If no return is specified, the function returns 'undefined'.
function square(n) {
    return n * n;
}

let squaredValue = square(5); // squaredValue is 25

// 6. callback Functions
// Functions can be passed as arguments to other functions.
function processNumber(num, callback) {
    return callback(num);
}   
let result = processNumber(7, square); // result is 49 (7 squared)
console.log(result); // Output: 49

// 7. IFFIE (Immediately Invoked Function Expression)
// A function that runs as soon as it is defined.
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!    

// 8. Why use functions?
// - Reuse code without repeating yourself (// JSclass4Function.js)
// - Organize code into logical sections
// - Make code easier to read and maintain  
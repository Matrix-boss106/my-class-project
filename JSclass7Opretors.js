// JavaScript Operators Explained
// Operators are special symbols or keywords that perform operations on operands (values and variables).
// Let's explore different types of operators with examples and explanations.

// 1. Arithmetic Operators
// Used to perform mathematical calculations.

let a = 10;
let b = 3;

let sum = a + b;        // Addition: 13
let diff = a - b;       // Subtraction: 7
let product = a * b;    // Multiplication: 30
let quotient = a / b;   // Division: 3.333...
let remainder = a % b;  // Modulus (remainder): 1
let power = a ** b;     // Exponentiation: 1000

// 2. Assignment Operators
// Used to assign values to variables.

let x = 5;      // Simple assignment
x += 2;         // x = x + 2; Now x is 7
x -= 1;         // x = x - 1; Now x is 6
x *= 3;         // x = x * 3; Now x is 18
x /= 2;         // x = x / 2; Now x is 9
x %= 4;         // x = x % 4; Now x is 1

// 3. Comparison Operators
// Used to compare two values and return a boolean (true/false).

let y = 8;

let isEqual = (y == 8);         // true (loose equality, type conversion allowed)
let isStrictEqual = (y === '8'); // false (strict equality, no type conversion)
let isNotEqual = (y != 5);      // true
let isGreater = (y > 5);        // true
let isLess = (y < 10);          // true
let isGreaterOrEqual = (y >= 8); // true
let isLessOrEqual = (y <= 7);   // false

// 4. Logical Operators
// Used to combine multiple conditions.

let age = 20;
let hasID = true;

let canEnter = (age >= 18) && hasID; // true (AND: both must be true)
let isTeen = (age >= 13) && (age <= 19); // false
let isChildOrTeen = (age < 13) || (age <= 19); // true (OR: at least one is true)
let notAdult = !(age >= 18); // false (NOT: reverses the result)

// 5. String Operators
// The + operator can also be used to concatenate (join) strings.

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// 6. Unary Operators
// Operators that work with only one operand.

let num = 5;
num++; // Increment: num is now 6
num--; // Decrement: num is now 5
let neg = -num; // Negation: -5
let type = typeof num; // "number"

// 7. Ternary Operator (Conditional Operator)
// A shorthand for if-else statements.

let score = 75;
let result = (score >= 60) ? "Pass" : "Fail"; // "Pass"

// 8. Bitwise Operators (Advanced)
// Work at the binary level (rarely used in everyday JS).

let bitA = 5;    // 0101 in binary
let bitB = 3;    // 0011 in binary

let andResult = bitA & bitB; // 1 (0001)
let orResult = bitA | bitB;  // 7 (0111)
let xorResult = bitA ^ bitB; // 6 (0110)
let notResult = ~bitA;       // -6 (inverts bits)
let leftShift = bitA << 1;   // 10 (1010)
let rightShift = bitA >> 1;  // 2 (0010)

// 9. Nullish Coalescing Operator (??)
// Returns the right-hand operand when the left-hand operand is null or undefined.
let userInput = null;
let defaultValue = "Default";
let finalValue = userInput ?? defaultValue; // "Default"

// 10. rest and spred Operator (...)
// Spread syntax expands an array or object into individual elements.
// Rest syntax collects multiple elements into an array.    
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spread: [1, 2, 3, 4, 5]
let [first, ...rest] = arr2; // Rest: first=1, rest=[2, 3, 4, 5]

// 11. Optional Chaining Operator (...)
// Safely access nested object properties.
let user = {
    profile: { name: "Alice" }
};
let userName = user.profile?.name; // "Alice"
let userAge = user.profile?.age;   // undefined (no error)  



// Gotcha: Be careful with == vs ===. Always prefer === for type-safe comparisons.

// Try changing values and operators above to see different results in the VS Code Output pane!
/*
    Conditional Statements in JavaScript

    Conditional statements allow you to execute different code blocks based on certain conditions.
    The most common conditional statements are: if-else, switch, and loops (for, while).
*/

// 1. if-else statement
// Use if-else to run code only if a condition is true (or false).

let age = 18;

if (age >= 18) {
    // This block runs if age is 18 or more
    console.log("You are an adult.");
} else {
    // This block runs if age is less than 18
    console.log("You are a minor.");
}

// 2. else if statement
// Use else if to check multiple conditions in sequence.

let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// 3. switch statement
// Use switch to select one of many code blocks to execute based on a variable's value.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break; // Stops checking further cases
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Another day");
        // Runs if none of the above cases match
}

// 4. Loops
// Loops let you repeat code multiple times.

// for loop: repeats code a set number of times
for (let i = 1; i <= 5; i++) {
    // This will print numbers 1 to 5
    console.log("For loop count:", i);
}

// while loop: repeats code while a condition is true
let count = 1;
while (count <= 3) {
    // This will print numbers 1 to 3
    console.log("While loop count:", count);
    count++;
}

// do-while loop: similar to while, but always runs at least once
let num = 1;
do {
    // This will print numbers 1 to 2
    console.log("Do-while loop count:", num);
    num++;
} while (num <= 2);

/*
    Summary:
    - Use if-else for simple true/false conditions.
    - Use switch for multiple possible values of a variable.
    - Use loops (for, while, do-while) to repeat code.
*/
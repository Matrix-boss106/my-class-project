// --- Arrays in JavaScript ---

// Arrays are used to store multiple values in a single variable.
// Each value in an array is called an element, and each element has an index (starting from 0).

// Example: Creating an array
const fruits = ["apple", "banana", "cherry"];
// 'fruits' is an array with 3 elements: "apple", "banana", and "cherry".

// Accessing elements in an array
console.log(fruits[0]); // Output: apple (first element)
console.log(fruits[1]); // Output: banana (second element)

// Adding elements to an array
fruits.push("orange"); // Adds "orange" to the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]

// Removing elements from an array
fruits.pop(); // Removes the last element ("orange")
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// --- Exploring forEach, map, filter, reduce with Arrays ---

// 1. forEach: Perform an action for each element (does not return a new array)
fruits.forEach(function(fruit, index) {
    // Print each fruit with its index
    console.log("Fruit at index " + index + " is " + fruit);
});

// 2. map: Create a new array by transforming each element
const upperFruits = fruits.map(function(fruit) {
    // Convert each fruit name to uppercase
    return fruit.toUpperCase();
});
console.log(upperFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// 3. filter: Create a new array with elements that pass a test
const fruitsWithA = fruits.filter(function(fruit) {
    // Include fruits that contain the letter 'a'
    return fruit.includes("a");
});
console.log(fruitsWithA); // Output: ["apple", "banana"]

// 4. reduce: Combine all elements into a single value
const allFruits = fruits.reduce(function(acc, fruit) {
    // Concatenate all fruit names into a single string, separated by commas
    return acc + ", " + fruit;
});
console.log(allFruits); // Output: apple, banana, cherry

// --- Summary ---
// - Arrays store multiple values in one variable.
// - Use 'forEach' to perform actions for each element.
// - Use 'map' to create a new array by transforming elements.
// - Use 'filter' to select elements based on a condition.
// - Use 'reduce' to combine all elements into a single value.
// JavaScript Objects Explained

// Objects in JavaScript are collections of key-value pairs.
// Keys are called "properties" and can be strings or symbols.
// Values can be any data type: string, number, array, function, even another object.

// 1. Creating an Object using Object Literal Syntax
const person = {
    name: "Alice",           // property 'name' with value "Alice"
    age: 30,                 // property 'age' with value 30
    isStudent: false,        // property 'isStudent' with value false
    // You can also add methods (functions) as properties:
    greet: function() {
        // 'this' refers to the current object
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing properties
console.log(person.name);      // Dot notation: outputs "Alice"
console.log(person['age']);    // Bracket notation: outputs 30

// Calling a method
person.greet();                // Outputs: Hello, my name is Alice

// 2. Adding and Removing Properties
person.city = "New York";      // Adds a new property 'city'
delete person.isStudent;       // Removes the 'isStudent' property

// 3. Checking if a property exists
console.log('age' in person);  // true
console.log(person.hasOwnProperty('city')); // true

// 4. Useful Object Methods

// Object.keys(obj): returns an array of property names
console.log(Object.keys(person)); // ["name", "age", "greet", "city"]

// Object.values(obj): returns an array of property values
console.log(Object.values(person)); // ["Alice", 30, function, "New York"]

// Object.entries(obj): returns an array of [key, value] pairs
console.log(Object.entries(person));
// [["name", "Alice"], ["age", 30], ["greet", function], ["city", "New York"]]

// 5. Copying Objects

// Shallow copy using Object.assign
const personCopy = Object.assign({}, person);

// Or using spread syntax (ES6+)
const personClone = { ...person };

// 6. Nested Objects

const company = {
    name: "TechCorp",
    address: {
        city: "San Francisco",
        zip: "94105"
    }
};
// Access nested properties
console.log(company.address.city); // "San Francisco"

// 7. Object.freeze() and Object.seal()

// Object.freeze(obj): makes the object immutable (can't add/remove/change properties)
Object.freeze(personCopy);

// Object.seal(obj): allows changing existing properties, but can't add/remove properties
Object.seal(personClone);

// Gotcha: Objects are reference types!
// Assigning one object to another variable copies the reference, not the object itself.
const anotherPerson = person;
anotherPerson.name = "Bob";
console.log(person.name); // "Bob" (both variables point to the same object)

// To avoid this, use Object.assign or spread syntax for shallow copies.

// Summary:
// - Objects group related data and functions together
// - Use dot or bracket notation to access properties
// - Use Object methods for property management and inspection
// - Be careful with references and copying objects
'use client';
import React, { useState, useMemo, useEffect } from "react";
import {
  FaDatabase,
  FaEquals,
  FaRandom,
  FaListUl,
  FaPuzzlePiece,
  FaMousePointer,
  FaClock,
  FaBolt,
  FaBug,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si"; // already imported
import Link from "next/link";

// Helper function to apply basic syntax highlighting to JavaScript code
const highlightJs = (code) => {
  // Define colors using Tailwind CSS classes for a VS Code-like appearance for JS
  const keywordColor = "text-purple-400";
  const operatorColor = "text-red-400";
  const stringColor = "text-green-400";
  const numberColor = "text-yellow-400";
  const commentColor = "text-gray-500 italic";
  const functionCallColor = "text-blue-400";
  const punctuationColor = "text-gray-300";

  // 1. HTML escape the entire code string first.
  let htmlEscapedCode = code
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">");

  // Define patterns with their corresponding class names.
  // The order here is important for sequential replacement: more specific patterns first.
  const tokenPatterns = [
    { regex: /(\/\/.*)/g, className: commentColor }, // Single-line comments
    { regex: /(\/\*[\s\S]*?\*\/)/g, className: commentColor }, // Multi-line comments
    { regex: /(`[^`]*`|"[^"]*"|'[^']*')/g, className: stringColor }, // Strings
    {
      regex:
        /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|this|super|class|extends|import|export|default|async|await|of|in|typeof|instanceof)\b/g,
      className: keywordColor,
    }, // Keywords
    {
      regex: /(===|!==|<=|>=|&&|\|\||\+\+|--|\*\*)/g,
      className: operatorColor,
    }, // Multi-char operators
    { regex: /(=|\+|-|\*|\/|%|!|<|>)/g, className: operatorColor }, // Single-char operators (HTML escaped <, >)
    { regex: /\b(\d+(\.\d+)?)\b/g, className: numberColor }, // Numbers
    {
      regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()/g,
      className: functionCallColor,
    }, // Function names (followed by parenthesis)
    { regex: /([{}()[\];:,])/g, className: punctuationColor }, // Punctuation
    // General identifiers will be left as default text color
  ];

  let currentCode = htmlEscapedCode;

  // Apply each pattern sequentially.
  tokenPatterns.forEach((pattern) => {
    currentCode = currentCode.replace(pattern.regex, (match) => {
      // Direct wrap: always wrap the matched token.
      return `<span class="${pattern.className}">${match}</span>`;
    });
  });

  return { __html: currentCode };
};

// Main App component for JavaScript Presentation
const JsPage = () => {
  const [activeSection, setActiveSection] = useState("intro");


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Define JS sections with content
  const jsSections = useMemo(
    () => ({
      intro: {
        title: "Introduction to JavaScript",
        icon: <SiJavascript className="inline text-yellow-400" />, // Changed from FaRocket to SiJavascript
        content: (
          <>
            <p className="text-lg mb-4">
              JavaScript is the world's most popular lightweight, interpreted,
              or just-in-time compiled programming language with first-class
              functions.
            </p>
            <p className="text-lg mb-4">
              It is the programming language for the Web, used for both
              client-side and server-side development (with Node.js).
            </p>
            <p className="text-lg mb-4">
              Along with HTML and CSS, JavaScript is one of the three core
              technologies of World Wide Web content production. It enables
              interactive web pages and is an essential part of web
              applications.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              What JavaScript Can Do:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>Change HTML content and CSS styles.</li>
              <li>React to HTML events.</li>
              <li>Validate data.</li>
              <li>Create animations.</li>
              <li>Load data from servers (AJAX/Fetch).</li>
            </ul>
          </>
        ),
        example: `// HTML structure for example:
// <button id="myButton">Click me</button>
// <p id="message"></p>

// Get elements from the DOM
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Add an event listener
button.addEventListener('click', function() {
  messageParagraph.textContent = "Button was clicked!";
  messageParagraph.style.color = "blue";
  messageParagraph.classList.add('highlight');
});

// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = "I'm a new div!";
document.body.appendChild(newDiv);`,
      },
      variables_data_types: {
        title: "Variables & Data Types",
        icon: <FaDatabase className="inline text-blue-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Variables are containers for storing data values. JavaScript has
              three keywords for declaring variables: `var`, `let`, and `const`.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `var`: Oldest, function-scoped, can be re-declared and updated.
              </li>
              <li>`let`: Block-scoped, can be updated but not re-declared.</li>
              <li>
                `const`: Block-scoped, cannot be re-declared or updated
                (constant).
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Data Types:
            </h3>
            <p className="text-lg mb-4">JavaScript has several data types:</p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Primitive:</strong> `string`,
                `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
              </li>
              <li>
                <strong className="font-bold">Non-Primitive (Object):</strong>{" "}
                `object`, `array`, `function`.
              </li>
            </ul>
          </>
        ),
        example: `// Variable Declarations
let name = "Alice";
const age = 30;
var city = "New York"; // Avoid 'var' in modern JS

// Data Types
let isStudent = true; // Boolean
let score = 95.5; // Number
let car = null; // Null
let response = undefined; // Undefined

// Object and Array
const person = {
  firstName: "John",
  lastName: "Doe"
};
const colors = ["red", "green", "blue"];

console.log(typeof name); // "string"
console.log(typeof age); // "number"`,
      },
      operators: {
        title: "Operators",
        icon: <FaEquals className="inline text-green-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Operators are used to perform operations on variables and values.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Types of Operators:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Arithmetic:</strong> `+`, `-`,
                `*`, `/`, `%` (modulus), `**` (exponentiation), `++`
                (increment), `--` (decrement).
              </li>
              <li>
                <strong className="font-bold">Assignment:</strong> `=`, `+=`,
                `-=`, `*=`, `/=`, `%=`, `**=`.
              </li>
              <li>
                <strong className="font-bold">Comparison:</strong> `==` (equal
                value), `===` (equal value and type), `!=` (not equal value),
                `!==` (not equal value or type), {"&gt;"}, {"&lt;"}, {"&gt;="},{" "}
                {"&lt;="}.
              </li>
              <li>
                <strong className="font-bold">Logical:</strong> `&&` (AND), `||`
                (OR), `!` (NOT).
              </li>
              <li>
                <strong className="font-bold">String:</strong> `+`
                (concatenation), `+=`.
              </li>
              <li>
                <strong className="font-bold">Ternary (Conditional):</strong>{" "}
                `condition ? expr1 : expr2`.
              </li>
            </ul>
          </>
        ),
        example: `let x = 10;
let y = 5;

// Arithmetic
let sum = x + y;     // 15
let product = x * y; // 50

// Assignment
x += 5; // x is now 15

// Comparison
let isEqual = (x === 15); // true
let isNotEqual = (y !== "5"); // true (different type)

// Logical
let canVote = (age >= 18 && isStudent === true); // false if age < 18 or isStudent is false

// Ternary
let status = (sum > 20) ? "High" : "Low"; // "Low"`,
      },
      control_flow: {
        title: "Control Flow (Conditionals & Loops)",
        icon: <FaRandom className="inline text-purple-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Control flow statements enable JavaScript to execute different
              blocks of code based on certain conditions or to repeat code
              execution multiple times.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Conditionals:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `if`, `else if`, `else`: Executes code based on a condition.
              </li>
              <li>
                `switch`: Used to perform different actions based on different
                conditions, often more readable than long `if-else if` chains.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Loops:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`for`: Loops through a block of code a number of times.</li>
              <li>
                `while`: Loops through a block of code as long as a specified
                condition is true.
              </li>
              <li>
                `do...while`: Similar to `while`, but executes the block at
                least once.
              </li>
              <li>`for...in`: Loops through the properties of an object.</li>
              <li>
                `for...of`: Loops through the values of an iterable object
                (e.g., Arrays, Strings, Maps, Sets).
              </li>
            </ul>
          </>
        ),
        example: `// If-Else If-Else
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cold.");
}

// Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}

// For Loop
for (let i = 0; i < 3; i++) {
  console.log("Loop iteration: " + i);
}

// For...of Loop (for arrays)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);`,
      },
      functions: {
        title: "Functions",
        icon: <FaCode className="inline text-pink-500" />, // Changed from FaFunction to FaCode
        content: (
          <>
            <p className="text-lg mb-4">
              Functions are blocks of code designed to perform a particular
              task. They allow you to reuse code and make your programs more
              modular and organized.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Defining Functions:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Function Declaration:</strong>{" "}
                `function name(params) {"{"} ... {"}"}`
              </li>
              <li>
                <strong className="font-bold">Function Expression:</strong>{" "}
                `const name = function(params) {"{"} ... {"}"};`
              </li>
              <li>
                <strong className="font-bold">Arrow Functions (ES6+):</strong>{" "}
                {"`"}const name = (params) {"&gt;"} {"{"} ... {"}"};{"`"}{" "}
                (concise syntax, different `this` binding).
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Function Parameters & Return Values:
            </h3>
            <p className="text-lg mb-4">
              Functions can accept input values (parameters) and can return a
              value using the `return` statement.
            </p>
          </>
        ),
        example: `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("World")); // "Hello, World!"

// Function Expression
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // 8

const calculateArea = (length, width) => {
  const area = length * width;
  return area;
};
console.log(calculateArea(10, 5)); // 50`,
      },
      arrays: {
        title: "Arrays",
        icon: <FaListUl className="inline text-cyan-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Arrays are special variables that can hold more than one value,
              typically a list of items. They are ordered collections.
            </p>
            <p className="text-lg mb-4">
              Arrays are zero-indexed, meaning the first element is at index 0.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Common Array Methods:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`length`: Property to get the number of elements.</li>
              <li>`push()`, `pop()`: Add/remove elements from the end.</li>
              <li>
                `unshift()`, `shift()`: Add/remove elements from the beginning.
              </li>
              <li>`indexOf()`, `includes()`: Find elements.</li>
              <li>
                `forEach()`, `map()`, `filter()`, `reduce()`: Iterate and
                transform arrays.
              </li>
              <li>`slice()`, `splice()`: Extract or change array parts.</li>
            </ul>
          </>
        ),
        example: `const fruits = ["apple", "banana", "cherry"];

// Accessing elements
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3

// Adding and removing
fruits.push("date"); // ["apple", "banana", "cherry", "date"]
fruits.pop();    // "date" removed

// Iterating
fruits.forEach(function(fruit) {
  console.log("I like " + fruit);
});

// Map: transform each element
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// Filter: create a new array with elements that pass a test
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["banana", "cherry"]`,
      },
      objects: {
        title: "Objects",
        icon: <FaPuzzlePiece className="inline text-yellow-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Objects are collections of key-value pairs. They are used to store
              complex data and more structured data.
            </p>
            <p className="text-lg mb-4">
              Keys (or property names) are strings (or Symbols), and values can
              be any data type, including other objects or functions.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Accessing Properties:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Dot Notation:</strong>{" "}
                `object.property` (most common)
              </li>
              <li>
                <strong className="font-bold">Bracket Notation:</strong>{" "}
                `object['property']` (useful for dynamic property names or names
                with spaces/special characters)
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Object Methods:
            </h3>
            <p className="text-lg mb-4">
              Functions stored as object properties are called methods. They
              allow objects to perform actions.
            </p>
          </>
        ),
        example: `const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
  start: function() { // Object method
    console.log("Engine started!");
  },
  "full name": "Toyota Camry" // Property with space
};

// Accessing properties
console.log(car.make); // "Toyota"
console.log(car["year"]); // 2020
console.log(car["full name"]); // "Toyota Camry"

// Modifying properties
car.color = "red";
car.owner = "Jane Doe"; // Add new property

// Calling a method
car.start(); // "Engine started!"

// Deleting a property
delete car.color;`,
      },
      dom_events: {
        title: "DOM Manipulation & Events",
        icon: <FaMousePointer className="inline text-blue-400" />,
        content: (
          <>
            <p className="text-lg mb-4">
              The DOM (Document Object Model) is a programming interface for web
              documents. It represents the page structure as a tree of objects,
              allowing JavaScript to access and manipulate HTML and CSS.
            </p>
            <p className="text-lg mb-4">
              Events are actions that happen in the browser, such as a user
              clicking a button, a page loading, or an input field changing.
              JavaScript can "listen" for these events and execute code in
              response.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Common DOM Methods:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `document.getElementById()`: Selects an element by its ID.
              </li>
              <li>
                `document.querySelector()`, `document.querySelectorAll()`:
                Selects elements using CSS selectors.
              </li>
              <li>
                `element.innerHTML`: Get or set the HTML content of an element.
              </li>
              <li>
                `element.textContent`: Get or set the text content of an
                element.
              </li>
              <li>`element.style.property`: Get or set inline CSS style.</li>
              <li>
                `element.classList.add()`, `remove()`, `toggle()`: Manage CSS
                classes.
              </li>
              <li>`document.createElement()`: Create new HTML elements.</li>
              <li>
                `element.appendChild()`, `removeChild()`: Add/remove child
                elements.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Event Handling:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `element.addEventListener('event', function)`: Attaches an event
                handler.
              </li>
              <li>
                Common events: `click`, `mouseover`, `keydown`, `submit`,
                `load`, `change`.
              </li>
            </ul>
          </>
        ),
        example: `// HTML structure for example:
// <button id="myButton">Click me</button>
// <p id="message"></p>

// Get elements from the DOM
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Add an event listener
button.addEventListener('click', function() {
  messageParagraph.textContent = "Button was clicked!";
  messageParagraph.style.color = "blue";
  messageParagraph.classList.add('highlight');
});

// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = "I'm a new div!";
document.body.appendChild(newDiv);`,
      },
      async_js: {
        title: "Asynchronous JavaScript",
        icon: <FaClock className="inline text-indigo-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              JavaScript is single-threaded, meaning it executes one command at
              a time. Asynchronous operations allow long-running tasks (like
              fetching data from a server) to run in the background without
              blocking the main thread.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Callbacks:
            </h3>
            <p className="text-lg mb-4">
              Functions passed as arguments to other functions, to be executed
              later. Can lead to "callback hell" for complex sequences.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Promises (ES6+):
            </h3>
            <p className="text-lg mb-4">
              An object representing the eventual completion or failure of an
              asynchronous operation. Provides a cleaner way to handle async
              code than callbacks.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                {"`"}new Promise((resolve, reject) {"&gt;"} {"{"} ... {"}"})
                {"`"}
              </li>
              <li>`.then()`: Handles successful resolution.</li>
              <li>`.catch()`: Handles errors/rejections.</li>
              <li>
                `.finally()`: Runs after promise is settled (resolved or
                rejected).
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Async/Await (ES2017+):
            </h3>
            <p className="text-lg mb-4">
              Syntactic sugar built on Promises, making asynchronous code look
              and behave more like synchronous code, greatly improving
              readability.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `async` keyword: Used before a function to declare it as
                asynchronous.
              </li>
              <li>
                `await` keyword: Can only be used inside an `async` function;
                pauses execution until a Promise settles.
              </li>
            </ul>
          </>
        ),
        example: `// Promise Example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await Example
async function getData() {
  try {
    const data = await fetchData(); // Await the promise
    console.log("Using async/await: " + data);
  } catch (error) {
    console.error("Using async/await error: " + error);
  } finally {
    console.log("Fetch attempt finished.");
  }
}
getData();`,
      },
      es6_features: {
        title: "ES6+ (Modern JavaScript)",
        icon: <FaBolt className="inline text-yellow-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              ECMAScript 2015 (ES6) introduced significant enhancements to
              JavaScript, making it more powerful, concise, and easier to write.
              Subsequent versions (ES7, ES8, etc.) continue to add new features.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Key ES6+ Features:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Arrow Functions:</strong> Shorter
                syntax for functions, lexical `this` binding.
              </li>
              <li>
                <strong className="font-bold">`let` and `const`:</strong>{" "}
                Block-scoped variable declarations (covered earlier).
              </li>
              <li>
                <strong className="font-bold">Template Literals:</strong> Easy
                string interpolation using backticks (`` ` ``).
              </li>
              <li>
                <strong className="font-bold">Destructuring Assignment:</strong>{" "}
                Extract values from arrays or properties from objects into
                distinct variables.
              </li>
              <li>
                <strong className="font-bold">
                  Spread (...) and Rest (...) Operators:
                </strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Spread: Expands iterables into individual elements.</li>
                  <li>Rest: Collects multiple elements into an array.</li>
                </ul>
              </li>
              <li>
                <strong className="font-bold">Classes:</strong> Syntactic sugar
                for constructor functions, enabling object-oriented programming
                patterns.
              </li>
              <li>
                <strong className="font-bold">
                  Modules (`import`/`export`):
                </strong>{" "}
                Standardized way to organize and reuse code across multiple
                files.
              </li>
              <li>
                <strong className="font-bold">Promises & Async/Await:</strong>{" "}
                For asynchronous programming (covered earlier).
              </li>
              <li>
                <strong className="font-bold">Default Parameters:</strong>{" "}
                Assign default values to function parameters.
              </li>
            </ul>
          </>
        ),
        example: `// Arrow Function
const greet = (name) => \`Hello, \${name}!\`;
console.log(greet("World"));

// Template Literals
const item = "Laptop";
const price = 1200;
console.log(\`The \${item} costs $\${price}.\`);

// Destructuring Assignment (Array)
const [first, second] = ["a", "b", "c"];
console.log(first); // "a"

// Destructuring Assignment (Object)
const { model, year } = { make: "Ford", model: "Focus", year: 2018 };
console.log(model); // "Focus"

// Spread Operator (Array Concatenation)
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Spread Operator (Object Merging)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Rest Parameter
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // "Dog makes a noise."`,
      },
      error_handling: {
        title: "Error Handling (try...catch)",
        icon: <FaBug className="inline text-red-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Error handling is crucial for writing robust JavaScript
              applications. The `try...catch` statement allows you to test a
              block of code for errors and handle them gracefully without
              crashing your program.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `try`: Defines a block of code to be tested for errors while it
                is being executed.
              </li>
              <li>
                `catch`: Defines a block of code to be executed if an error
                occurs in the `try` block. It receives the error object as an
                argument.
              </li>
              <li>
                `finally`: (Optional) Defines a block of code to be executed
                regardless of the result of the `try...catch` block (i.e.,
                whether an error occurred or not).
              </li>
              <li>`throw`: Creates a custom error.</li>
            </ul>
          </>
        ),
        example: `function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("An error occurred: " + error.message);
    return null; // Return a safe value or re-throw
  } finally {
    console.log("Division attempt finished.");
  }
}

console.log(divide(10, 2)); // 5, "Division attempt finished."
console.log(divide(10, 0)); // "An error occurred: Division by zero is not allowed.", null, "Division attempt finished."`,
      },
      json_fetch_api: {
        title: "JSON & Fetch API",
        icon: <FaNetworkWired className="inline text-green-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              JSON (JavaScript Object Notation) is a lightweight
              data-interchange format. It is easy for humans to read and write,
              and easy for machines to parse and generate. It is often used when
              data is sent from a server to a web page.
            </p>
            <p className="text-lg mb-4">
              The Fetch API provides a modern, promise-based interface for
              making network requests (e.g., to retrieve resources from a
              server). It's a powerful replacement for older methods like
              `XMLHttpRequest`.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              JSON Methods:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `JSON.parse()`: Converts a JSON string into a JavaScript object.
              </li>
              <li>
                `JSON.stringify()`: Converts a JavaScript object or value into a
                JSON string.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Fetch API:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                Returns a Promise that resolves to the `Response` to that
                request.
              </li>
              <li>
                The `Response` object has methods like `.json()`, `.text()` to
                parse the body.
              </li>
            </ul>
          </>
        ),
        example: `// JSON Example
const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';
const jsObject = JSON.parse(jsonString);
console.log(jsObject.name); // "Alice"

const anotherJsObject = { product: "Laptop", price: 1200 };
const newJsonString = JSON.stringify(anotherJsObject);
console.log(newJsonString); // '{"product":"Laptop","price":1200}'

// Fetch API Example (simplified)
async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const userData = await response.json();
    console.log("Fetched User:", userData.name);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchUserData();`,
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-sans text-gray-900">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Hero Section with Breadcrumb */}
      <section className="relative w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 py-14 md:py-20 px-4 md:px-0 shadow-2xl rounded-b-[2.5rem] mb-6 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-yellow-200 opacity-30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-yellow-100">
                <li>
                  <Link href="/" className="hover:underline hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-yellow-200">/</span>
                </li>
                <li>
                  <Link href="/courses" className="hover:underline hover:text-white transition">
                    Courses
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-yellow-200">/</span>
                </li>
                <li className="text-white font-semibold">JavaScript</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl flex items-center tracking-tight">
                <SiJavascript className="inline text-yellow-200 mr-3" size={56} />
                JavaScript Mastery
              </h1>
            </div>
            <p className="text-yellow-100 md:text-xl max-w-2xl mb-6 md:mb-0 font-medium">
              Learn everything about JavaScript, from the basics to advanced
              features, and build dynamic, interactive web applications with
              confidence.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#start"
                className="inline-block bg-white/90 hover:bg-white text-yellow-700 font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-yellow-100"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-block bg-yellow-700/80 hover:bg-yellow-800 text-white font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-yellow-900/10"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/30 shadow-2xl p-8 border-8 border-white/20">
              <SiJavascript className="text-white drop-shadow-lg" size={96} />
            </span>
            <span className="mt-4 text-white/80 font-semibold tracking-wide text-lg">
              JavaScript Certified
            </span>
          </div>
        </div>
        {/* Decorative SVG with JS Icon */}
        <div className="absolute bottom-0 left-0 w-full flex items-end pointer-events-none">
          <svg
            className="w-full"
            height="48"
            viewBox="0 0 1440 48"
            fill="none"
            style={{ zIndex: 1 }}
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,38L48,32C96,26,192,14,288,14C384,14,480,26,576,38C672,50,768,62,864,62C960,62,1056,50,1152,38C1248,26,1344,14,1392,7L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V38Z"
            />
          </svg>
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-full shadow-xl p-3 border-4 border-yellow-200"
            style={{ zIndex: 2 }}
          >
            <SiJavascript className="text-yellow-500" size={56} />
          </span>
        </div>
      </section>

      {/* ...rest of your page content... */}
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation for small screens */}
          <nav className="md:hidden w-full bg-white rounded-2xl shadow-lg p-5 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              JavaScript Features
            </h2>
            <ul className="space-y-2">
              {Object.keys(jsSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === key
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-2">{jsSections[key].icon}</span>
                    {jsSections[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sidebar Navigation */}
          <nav className="hidden md:block w-full md:w-[20%] bg-white rounded-2xl shadow-xl p-6 flex-shrink-0">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              JavaScript Features
            </h2>
            <ul className="space-y-2">
              {Object.keys(jsSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-3 px-5 rounded-xl transition-all duration-200 group ${
                      activeSection === key
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-3 text-lg">{jsSections[key].icon}</span>
                    <span className="flex-1">{jsSections[key].title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Display Area */}
          <main className="flex-grow bg-white rounded-2xl shadow-xl p-8 md:w-[70%] min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">{jsSections[activeSection].icon}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 border-b-2 pb-2 border-blue-100 flex-1">
                {jsSections[activeSection].title}
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              {jsSections[activeSection].content}
              {jsSections[activeSection].example && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Code Example:
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto border border-gray-800">
                    <code
                      dangerouslySetInnerHTML={highlightJs(
                        jsSections[activeSection].example
                      )}
                    />
                  </pre>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JsPage;

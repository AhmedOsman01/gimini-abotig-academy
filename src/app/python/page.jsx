"use client";

import { FaPython, FaDatabase, FaPlus, FaCodeBranch, FaCogs, FaList, FaBoxes, FaCube, FaBoxOpen, FaBug, FaFileAlt, FaMagic, FaSyncAlt, FaChevronRight, FaBook, FaExclamationTriangle, FaFile, FaStar, FaRedo } from "react-icons/fa";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";

// Helper function to apply basic syntax highlighting to Python code
const highlightPython = (code) => {
  // Define colors using Tailwind CSS classes for a VS Code-like appearance for Python
  const keywordColor = "text-purple-400"; // for def, class, if, else, for, in, while, return, import, from, as, try, except, finally, with, pass, break, continue, lambda, global, nonlocal, and, or, not, is, None, True, False
  const operatorColor = "text-red-400"; // for =, +, -, *, /, %, **, //, ==, !=, <, >, <=, >=, etc.
  const stringColor = "text-green-400"; // for string literals
  const numberColor = "text-yellow-400"; // for number literals
  const commentColor = "text-gray-500 italic"; // for comments
  const builtinFunctionColor = "text-indigo-400"; // for print, len, range, etc.
  const classNameColor = "text-cyan-400"; // for class names
  const punctuationColor = "text-gray-300"; // for (){}[],.;:

  // 1. HTML escape the entire code string first.
  let htmlEscapedCode = code
    .replace(/&/g, "&") // Must be done first!
    .replace(/</g, "<")
    .replace(/>/g, ">");

  const keywords = [
    "False",
    "None",
    "True",
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "nonlocal",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield",
  ];
  const builtins = [
    "print",
    "len",
    "range",
    "input",
    "int",
    "str",
    "float",
    "list",
    "dict",
    "set",
    "tuple",
    "sum",
    "min",
    "max",
    "abs",
    "round",
  ];
  // Operators need to be ordered from longest to shortest to ensure correct matching (e.g., '**=' before '*').
  // Also, regex special characters like `*`, `+`, `.` must be escaped.
  const operators = [
    "\\*\\*=",
    "//=",
    "==",
    "!=",
    "<=",
    ">=",
    "\\+=",
    "-=",
    "\\*=",
    "\\/=",
    "%=", // Assignment and comparison
    "\\*\\*",
    "//", // Exponentiation and floor division
    "=",
    "\\+",
    "-",
    "\\*",
    "\\/",
    "%", // Basic arithmetic
    "<",
    ">", // Comparison operators as HTML entities
  ];

  // Define patterns with their corresponding class names.
  // The order here is important for sequential replacement: more specific patterns first.
  const tokenPatterns = [
    { regex: /(\#.*)/g, className: commentColor }, // Comments
    {
      regex: /("""[\s\S]*?"""|'''[\s\S]*?'''|"([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g,
      className: stringColor,
    }, // Strings
    {
      regex: new RegExp(`\\b(${keywords.join("|")})\\b`, "g"),
      className: keywordColor,
    }, // Keywords
    {
      regex: new RegExp(`\\b(${builtins.join("|")})\\b(?=\\()`, "g"),
      className: builtinFunctionColor,
    }, // Built-in functions
    // Fixed: Simplified regex for class names to avoid unexpected ')' error.
    // Class names are typically capitalized and not immediately followed by an opening parenthesis.
    { regex: /\b([A-Z][a-zA-Z0-9_]*)\b(?!\()/g, className: classNameColor },
    {
      regex: new RegExp(
        `(${operators.sort((a, b) => b.length - a.length).join("|")})`,
        "g"
      ),
      className: operatorColor,
    }, // Operators
    { regex: /\b(\d+(\.\d+)?)\b/g, className: numberColor }, // Numbers
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

// Main App component for Python Presentation
const PythonPage = () => {
  const [activeSection, setActiveSection] = useState("intro");


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Define Python sections with content and appropriate icons
  const pythonSections = useMemo(
    () => ({
      intro: {
        title: "Introduction to Python",
        icon: <FaPython className="inline text-yellow-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Python is a popular high-level, interpreted programming language
              known for its simplicity and readability. It supports multiple
              programming paradigms, including object-oriented, imperative, and
              functional programming.
            </p>
            <p className="text-lg mb-4">
              Python is widely used in web development (Django, Flask), data
              science (NumPy, Pandas), artificial intelligence, machine
              learning, automation, scripting, and more.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Why Python is Popular:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Simple Syntax:</strong> Easy to
                learn and read, resembling natural language.
              </li>
              <li>
                <strong className="font-bold">Versatile:</strong> Used in a vast
                array of applications and industries.
              </li>
              <li>
                <strong className="font-bold">
                  Large Community & Libraries:
                </strong>{" "}
                Extensive support, frameworks, and libraries available.
              </li>
              <li>
                <strong className="font-bold">Cross-platform:</strong> Runs on
                Windows, macOS, Linux, and more.
              </li>
            </ul>
          </>
        ),
        example: null,
      },
      variables_data_types: {
        title: "Variables & Data Types",
        icon: <FaDatabase className="inline text-blue-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              In Python, variables are used to store data. You don't need to
              declare their type explicitly; Python infers it dynamically. Data
              types classify the type of value a variable can hold.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Common Data Types:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Numeric:</strong> `int`
                (integers), `float` (floating-point numbers), `complex`.
              </li>
              <li>
                <strong className="font-bold">Sequence:</strong> `str`
                (strings), `list`, `tuple`, `range`.
              </li>
              <li>
                <strong className="font-bold">Mapping:</strong> `dict`
                (dictionaries).
              </li>
              <li>
                <strong className="font-bold">Set:</strong> `set`, `frozenset`.
              </li>
              <li>
                <strong className="font-bold">Boolean:</strong> `bool` (`True`,
                `False`).
              </li>
              <li>
                <strong className="font-bold">None Type:</strong> `None`.
              </li>
            </ul>
          </>
        ),
        example: `# Variable Assignment
name = "Charlie"
age = 25
height = 1.75
is_student = True
nothing = None

# Data Type Checking
print(type(name))       # <class 'str'>
print(type(age))        # <class 'int'>
print(type(height))     # <class 'float'>
print(type(is_student)) # <class 'bool'>
print(type(nothing))    # <class 'NoneType'>`,
      },
      operators: {
        title: "Operators",
        icon: <FaPlus className="inline text-pink-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Operators are special symbols that perform operations on one or
              more operands (values or variables).
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Types of Operators:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Arithmetic:</strong> `+`, `-`,
                `*`, `/`, `%` (modulus), `**` (exponentiation), `//` (floor
                division).
              </li>
              <li>
                <strong className="font-bold">Assignment:</strong> `=`, `+=`,
                `-=`, `*=`, `/=`, `%=`, `**=`.
              </li>
              <li>
                <strong className="font-bold">Comparison:</strong> `==` (equal),
                `!=` (not equal), {"&gt;"}, {"&lt;"}, {"&gt;="}, {"&lt;="}.
              </li>
              <li>
                <strong className="font-bold">Logical:</strong> `and`, `or`,
                `not`.
              </li>
              <li>
                <strong className="font-bold">Identity:</strong> `is`, `is not`
                (check if two variables refer to the same object).
              </li>
              <li>
                <strong className="font-bold">Membership:</strong> `in`, `not
                in` (check if a value is present in a sequence).
              </li>
            </ul>
          </>
        ),
        example: `x = 10
y = 3

# Arithmetic
print(x + y)  # 13
print(x / y)  # 3.333...
print(x // y) # 3 (floor division)
print(x % y)  # 1 (remainder)
print(x ** y) # 1000 (exponentiation)

# Comparison
print(x == y) # False
print(x > y)  # True

# Logical
a = True
b = False
print(a and b) # False
print(a or b)  # True
print(not a)   # False

# Membership
my_list = [1, 2, 3]
print(2 in my_list)     # True
print(4 not in my_list) # True`,
      },
      control_flow: {
        title: "Control Flow (Conditionals & Loops)",
        icon: <FaCodeBranch className="inline text-green-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Control flow statements dictate the order in which instructions
              are executed in a program. Python uses indentation to define code
              blocks.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Conditionals:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `if`, `elif` (else if), `else`: Executes code blocks based on
                conditions.
              </li>
            </ul>
            <h3 className="2xl font-semibold text-gray-800 mb-3">Loops:</h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                `for` loop: Iterates over a sequence (list, tuple, string,
                range, etc.).
              </li>
              <li>
                `while` loop: Repeats a block of code as long as a condition is
                true.
              </li>
              <li>`break`: Terminates the loop entirely.</li>
              <li>
                `continue`: Skips the rest of the current iteration and proceeds
                to the next.
              </li>
              <li>
                `pass`: A null operation; nothing happens when it executes.
                Useful as a placeholder.
              </li>
            </ul>
          </>
        ),
        example: `# If-Elif-Else
score = 85
if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
else:
    print("Grade C")

# For Loop with range()
for i in range(3): # 0, 1, 2
    print(f"Iteration {i}")

# For Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# While Loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# Break and Continue
for num in range(5):
    if num == 2:
        continue # Skip 2
    if num == 4:
        break    # Exit loop at 4
    print(num) # Output: 0, 1, 3`,
      },
      functions: {
        title: "Functions",
        icon: <FaCogs className="inline text-indigo-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Functions are blocks of reusable code that perform a specific
              task. They help organize code, make it more readable, and prevent
              repetition (DRY principle).
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Defining Functions:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                Defined using the `def` keyword, followed by the function name,
                parentheses for parameters, and a colon.
              </li>
              <li>The function body is indented.</li>
              <li>`return` statement sends a value back from the function.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Arguments & Parameters:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Positional Arguments:</strong>{" "}
                Passed in order.
              </li>
              <li>
                <strong className="font-bold">Keyword Arguments:</strong> Passed
                with `key=value` syntax, order doesn't matter.
              </li>
              <li>
                <strong className="font-bold">Default Parameters:</strong>{" "}
                Assign a default value if no argument is provided.
              </li>
              <li>
                <strong className="font-bold">
                  Arbitrary Arguments (`*args`, `**kwargs`):
                </strong>{" "}
                Handle an unknown number of positional or keyword arguments.
              </li>
            </ul>
          </>
        ),
        example: `# Simple Function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice")) # Hello, Alice!

# Function with default parameter
def multiply(a, b=2):
    return a * b

print(multiply(5))    # 10 (b uses default value)
print(multiply(5, 3)) # 15

# Function with *args (arbitrary positional arguments)
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3)) # 6

# Function with **kwargs (arbitrary keyword arguments)
def print_details(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_details(name="Bob", age=30, city="London")`,
      },
      lists_tuples_sets_dicts: {
        title: "Collections (Lists, Tuples, Sets, Dictionaries)",
        icon: <FaList className="inline text-cyan-600" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Python offers several built-in data structures to store
              collections of data. Choosing the right one depends on your needs
              regarding order, mutability, and uniqueness.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Lists (`[]`):
            </h3>
            <p className="text-lg mb-4">
              Ordered, changeable, and allow duplicate members. Most versatile
              sequence type.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Tuples (`()`):
            </h3>
            <p className="text-lg mb-4">
              Ordered, unchangeable (immutable), and allow duplicate members.
              Faster than lists for fixed collections.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Sets (`{}` or `set()`):
            </h3>
            <p className="text-lg mb-4">
              Unordered, unchangeable (elements cannot be changed, but you can
              add/remove items), and do not allow duplicate members. Useful for
              mathematical set operations.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Dictionaries (`{}`):
            </h3>
            <p className="text-lg mb-4">
              Ordered (as of Python 3.7), changeable, and do not allow duplicate
              keys. Store data in key-value pairs.
            </p>
          </>
        ),
        example: `# List
my_list = ["apple", "banana", "cherry"]
my_list.append("date")
print(my_list[0]) # apple

# Tuple
my_tuple = ("red", "green", "blue")
# my_tuple.append("yellow") # This would cause an error (immutable)
print(my_tuple[1]) # green

# Set
my_set = {"a", "b", "c", "a"}
print(my_set) # {'a', 'b', 'c'} (duplicates removed)
my_set.add("d")
print(my_set) # {'a', 'b', 'c', 'd'}

# Dictionary
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
print(my_dict["name"]) # Alice
my_dict["age"] = 31
my_dict["job"] = "Engineer"
print(my_dict)`,
      },
      classes_objects: {
        title: "Classes & Objects (OOP)",
        icon: <FaCube className="inline text-purple-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Python is an object-oriented programming (OOP) language. OOP
              allows you to structure your programs by creating "objects" that
              combine data (attributes) and functions (methods) that operate on
              that data.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Key OOP Concepts:
            </h3>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>
                <strong className="font-bold">Class:</strong> A blueprint for
                creating objects.
              </li>
              <li>
                <strong className="font-bold">Object:</strong> An instance of a
                class.
              </li>
              <li>
                <strong className="font-bold">Attributes:</strong> Variables
                that belong to an object (data).
              </li>
              <li>
                <strong className="font-bold">Methods:</strong> Functions that
                belong to an object (behavior).
              </li>
              <li>
                <strong className="font-bold">`__init__` method:</strong> A
                special constructor method, called when a new object is created.
              </li>
              <li>
                <strong className="font-bold">`self` parameter:</strong> A
                reference to the current instance of the class, always the first
                parameter in instance methods.
              </li>
              <li>
                <strong className="font-bold">Inheritance:</strong> Allows a
                class (child) to inherit properties and methods from another
                class (parent).
              </li>
            </ul>
          </>
        ),
        example: `# Define a Class
class Dog:
    # Class attribute
    species = "Canis familiaris"

    # Constructor method
    def __init__(self, name, age):
        self.name = name # Instance attribute
        self.age = age   # Instance attribute

    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"

    def get_age_in_dog_years(self):
        return self.age * 7

# Create Objects (Instances of the Dog class)
my_dog = Dog("Buddy", 3)
your_dog = Dog("Lucy", 5)

# Access attributes
print(my_dog.name)        # Buddy
print(my_dog.species)     # Canis familiaris

# Call methods
print(my_dog.bark())            # Buddy says Woof!
print(your_dog.get_age_in_dog_years()) # 35

# Inheritance
class Labrador(Dog):
    def __init__(self, name, age, color):
        super().__init__(name, age) # Call parent constructor
        self.color = color

    def retrieve(self):
        return f"{self.name} is retrieving the ball."

my_lab = Labrador("Max", 2, "golden")
print(my_lab.bark())      # Max says Woof!
print(my_lab.retrieve())  # Max is retrieving the ball.`,
      },
      modules_packages: {
        title: "Modules & Packages",
        icon: <FaBoxOpen className="inline text-orange-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Modules and packages help organize Python code into reusable and
              manageable units. This promotes code reusability and avoids naming
              conflicts.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Modules:
            </h3>
            <p className="text-lg mb-4">
              A module is simply a Python file (`.py`) containing Python
              definitions and statements. You can import modules to use their
              functions, classes, and variables in other files.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`import module_name`: Imports the entire module.</li>
              <li>
                `from module_name import specific_item`: Imports only specific
                items.
              </li>
              <li>`import module_name as alias`: Imports with an alias.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Packages:
            </h3>
            <p className="text-lg mb-4">
              A package is a way of organizing related modules into a directory
              hierarchy. A directory becomes a Python package if it contains an
              `__init__.py` file (even if empty).
            </p>
          </>
        ),
        example: `# Example: my_module.py
# def greet(name):
#     return f"Hello from module, {name}!"
#
# PI = 3.14159

# Example: main.py (or your current script)
import math # Built-in module
print(math.sqrt(16)) # 4.0

# Assuming my_module.py exists in the same directory
# import my_module
# print(my_module.greet("Dave")) # Hello from module, Dave!
# print(my_module.PI) # 3.14159

# from my_module import greet, PI
# print(greet("Eve")) # Hello from module, Eve!

# Example of a package structure:
# my_package/
# |--- __init__.py
# |--- module_a.py
# |--- module_b.py
#
# from my_package import module_a
# from my_package.module_b import some_function`,
      },
      error_handling: {
        title: "Error Handling (try...except)",
        icon: <FaExclamationTriangle className="inline text-red-500" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Error handling allows your program to gracefully manage unexpected
              situations (exceptions) that occur during execution, preventing
              crashes and providing informative feedback.
            </p>
            <p className="text-lg mb-4">
              Python uses `try`, `except`, `else`, and `finally` blocks for
              robust error handling.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`try`: The code that might raise an exception.</li>
              <li>
                `except`: Catches and handles specific exceptions. You can have
                multiple `except` blocks.
              </li>
              <li>
                `else`: (Optional) Code to execute if the `try` block runs
                without any exceptions.
              </li>
              <li>
                `finally`: (Optional) Code that will always execute, regardless
                of whether an exception occurred or not. Useful for cleanup.
              </li>
              <li>`raise`: Used to explicitly raise an exception.</li>
            </ul>
          </>
        ),
        example: `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
        return None
    except TypeError:
        print("Error: Invalid input types for division!")
        return None
    else:
        print("Division successful!")
        return result
    finally:
        print("Division operation attempted.")

print(divide(10, 2))  # Division successful! 5.0, Division operation attempted.
print(divide(10, 0))  # Error: Cannot divide by zero! None, Division operation attempted.
print(divide(10, "a")) # Error: Invalid input types for division! None, Division operation attempted.`,
      },
      file_io: {
        title: "File I/O (Input/Output)",
        icon: <FaFileAlt className="inline text-gray-700" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Python provides built-in functions to interact with files on your
              computer, allowing you to read data from files or write data to
              them.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Opening Files (`open()`):
            </h3>
            <p className="text-lg mb-4">
              The `open()` function is used to open a file. It returns a file
              object, which has methods for reading, writing, and manipulating
              the file.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>`"r"`: Read mode (default).</li>
              <li>
                `"w"`: Write mode (creates new file or truncates existing).
              </li>
              <li>`"a"`: Append mode (adds to end of file).</li>
              <li>`"x"`: Exclusive creation mode (fails if file exists).</li>
              <li>`"t"`: Text mode (default).</li>
              <li>`"b"`: Binary mode.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              `with` statement:
            </h3>
            <p className="text-lg mb-4">
              It's highly recommended to use the `with` statement when working
              with files. It ensures that the file is properly closed even if
              errors occurs.
            </p>
          </>
        ),
        example: `# Writing to a file
with open("my_file.txt", "w") as file:
    file.write("Hello, Python file I/O!\n")
    file.write("This is a new line.")

# Reading from a file
with open("my_file.txt", "r") as file:
    content = file.read()
    print("File Content:")
    print(content)

# Appending to a file
with open("my_file.txt", "a") as file:
    file.write("\nAppending another line.")

# Reading line by line
with open("my_file.txt", "r") as file:
    print("\nReading line by line:")
    for line in file:
        print(line.strip()) # .strip() removes leading/trailing whitespace including newline`,
      },
      decorators: {
        title: "Decorators",
        icon: <FaMagic className="inline text-pink-400" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Decorators in Python are a powerful and elegant way to modify or
              enhance the behavior of functions or methods without directly
              changing their source code. They are essentially functions that
              take another function as an argument and return a new function (a
              "decorated" version).
            </p>
            <p className="text-lg mb-4">
              They are commonly used for logging, timing, authentication,
              caching, and more.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Syntax:
            </h3>
            <p className="text-lg mb-4">
              You define a decorator function, and then apply it using the
              `@decorator_name` syntax just above the function you want to
              decorate.
            </p>
          </>
        ),
        example: `# A simple decorator function
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Calling the decorated function
say_hello()
# Output:
# Something is happening before the function is called.
# Hello!
# Something is happening after the function is called.

# Decorator with arguments
def repeat(num_times):
    def decorator_repeat(func):
        def wrapper_repeat(*args, **kwargs):
            for _ in range(num_times):
                func(*args, **kwargs)
        return wrapper_repeat
    return decorator_repeat

@repeat(num_times=3)
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")
# Output:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!`,
      },
      generators_iterators: {
        title: "Generators & Iterators",
        icon: <FaRedo className="inline text-green-700" />,
        content: (
          <>
            <p className="text-lg mb-4">
              Generators and iterators are fundamental concepts for efficient
              handling of sequences of data, especially large ones, by allowing
              "lazy evaluation" (producing values on demand).
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Iterators:
            </h3>
            <p className="text-lg mb-4">
              An object that can be iterated upon, meaning you can traverse
              through all its elements. Objects like lists, tuples, strings, and
              dictionaries are iterable. The `iter()` function gets an iterator
              from an iterable, and `next()` retrieves the next item.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Generators:
            </h3>
            <p className="text-lg mb-4">
              Functions that return an iterator. They are defined like normal
              functions but use the `yield` keyword instead of `return` to
              produce a sequence of results. Each time `yield` is encountered,
              the function's state is saved, and execution resumes from that
              point on the next call.
            </p>
            <p className="text-lg mb-4">
              Generators are memory-efficient as they don't store all values in
              memory at once; they generate them one by one.
            </p>
          </>
        ),
        example: `# Example of an Iterator
my_list = [1, 2, 3]
my_iterator = iter(my_list)

print(next(my_iterator)) # 1
print(next(my_iterator)) # 2
print(next(my_iterator)) # 3

# Example of a Generator Function
def count_up_to(max_num):
    count = 1
    while count <= max_num:
        yield count
        count += 1

# Using the generator
counter_gen = count_up_to(3)
print(next(counter_gen)) # 1
print(next(counter_gen)) # 2
print(next(counter_gen)) # 3

# Generators are commonly used in for loops
print("\nUsing generator in a loop:")
for num in count_up_to(5):
    print(num)`,
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
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 py-14 md:py-20 px-4 md:px-0 shadow-2xl rounded-b-[2.5rem] mb-6 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-300 opacity-30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-blue-100">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-blue-200">/</span>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="hover:underline hover:text-white transition"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-blue-200">/</span>
                </li>
                <li className="text-white font-semibold">Python</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl flex items-center tracking-tight">
                <FaPython className="inline text-blue-200 mr-3" size={56} />
                Python Mastery
              </h1>
            </div>
            <p className="text-blue-100 md:text-xl max-w-2xl mb-6 md:mb-0 font-medium">
              Learn everything about Python, from the basics to advanced features,
              and build powerful, readable, and efficient applications with
              confidence.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#start"
                className="inline-block bg-white/90 hover:bg-white text-blue-700 font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-blue-100"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-block bg-blue-700/80 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-blue-900/10"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/30 shadow-2xl p-8 border-8 border-white/20">
              <FaPython className="text-white drop-shadow-lg" size={96} />
            </span>
            <span className="mt-4 text-white/80 font-semibold tracking-wide text-lg">
              Python Certified
            </span>
          </div>
        </div>
        {/* Decorative SVG with Python Icon */}
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
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-full shadow-xl p-3 border-4 border-blue-200"
            style={{ zIndex: 2 }}
          >
            <FaPython className="text-blue-500" size={56} />
          </span>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation for small screens */}
          <nav className="md:hidden w-full bg-white rounded-2xl shadow-lg p-5 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Topics</h2>
            <ul className="space-y-2">
              {Object.keys(pythonSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === key
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-2">{pythonSections[key].icon}</span>
                    {pythonSections[key].title}
                    {activeSection === key && (
                      <FaChevronRight className="ml-auto text-blue-400" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sidebar Navigation */}
          <nav className="hidden md:block w-full md:w-[20%] bg-white rounded-2xl shadow-xl p-6 flex-shrink-0">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Python Features
            </h2>
            <ul className="space-y-2">
              {Object.keys(pythonSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-3 px-5 rounded-xl transition-all duration-200 group ${
                      activeSection === key
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-3 text-lg">{pythonSections[key].icon}</span>
                    <span className="flex-1">{pythonSections[key].title}</span>
                    {activeSection === key && (
                      <FaChevronRight className="ml-auto text-white group-hover:text-blue-600" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Display Area */}
          <main className="flex-grow bg-white rounded-2xl shadow-xl p-8 md:w-[70%] min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">{pythonSections[activeSection].icon}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 border-b-2 pb-2 border-blue-100 flex-1">
                {pythonSections[activeSection].title}
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              {pythonSections[activeSection].content}
              {pythonSections[activeSection].example && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Code Example:
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto border border-gray-800">
                    <code
                      dangerouslySetInnerHTML={highlightPython(
                        pythonSections[activeSection].example
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

export default PythonPage;

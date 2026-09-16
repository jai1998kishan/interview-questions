/*

Functions in JavaScript
    A function is a reusable block of code designed to perform a specific task. You write it once, then call it whenever you need it.

Why Use Functions?
    Reusability — Write once, use many times.

    Organization — Break big problems into smaller pieces.

    Readability — Named blocks describe what code does.

    Avoid repetition — DRY principle (Don't Repeat Yourself).

    Maintainability — Fix a bug in one place.


*/

function greet(name) {
  // function definition
  return "Hello, " + name;
}

greet("Alice"); // function call → "Hello, Alice"

/*

e) Immediately Invoked Function Expression (IIFE)
Runs immediately after being defined.

*/

(function () {
  console.log("Runs right away!");
})();

// Arrow version
(() => {
  console.log("Also runs right away!");
})();

/*

Parameters are Passed by Value (with a twist)
    Primitives → copied by value (original not affected).

    Objects/arrays → passed by reference (original CAN be affected).

*/

function changeNum(n) {
  n = 100;
}
let x = 10;
changeNum(x);
console.log(x); // 10 ✅ unchanged

function changeObj(o) {
  o.name = "Bob";
}
let person = { name: "Alice" };
changeObj(person);
console.log(person.name); // "Bob" ❌ affected

/*

6. Arrow Functions vs Regular Functions
This is a common interview topic. Key differences:

Feature	                        Regular Function	                Arrow Function
Syntax	                            function() {}	                    () => {}
this binding	                    Own this (dynamic)	                Inherits this from outer scope
arguments object	                ✅ Yes	                          ❌ No (use rest params)
Can be a constructor (new)	        ✅ Yes	                          ❌ No
Hoisting	                        Declarations hoisted	            Not hoisted (like expressions)
prototype property	                ✅ Yes	                          ❌ No
Implicit return	                    ❌ No	                          ✅ Yes (for single expressions)


⚠️ Rule: Use arrow functions for callbacks and short functions. Use regular functions when you need your own this (like object methods).
*/

const obj = {
  name: "Alice",
  regular() {
    console.log(this.name); // "Alice"
  },
  arrow: () => {
    console.log(this.name); // undefined (this = outer scope)
  },
};

obj.regular(); // "Alice"
obj.arrow(); // undefined

// ⚠️ Rule: Use arrow functions for callbacks and short functions. Use regular functions when you need your own this (like object methods).

/*

7. Higher-Order Functions
    A function that either:

    Takes another function as an argument, OR

    Returns a function.



*/

// Takes a function
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}

repeat(3, (i) => console.log(i)); // 0 1 2

// Returns a function
function multiplier(factor) {
  return (x) => x * factor;
}

const double = multiplier(2);
console.log(double(5)); // 10

/*

Built-in Higher-Order Functions
Arrays have many:

*/

let nums = [1, 2, 3, 4];

nums.map((n) => n * 2); // [2, 4, 6, 8]
nums.filter((n) => n % 2 === 0); // [2, 4]
nums.reduce((sum, n) => sum + n, 0); // 10
nums.forEach((n) => console.log(n)); // logs each
nums.find((n) => n > 2); // 3
nums.some((n) => n > 3); // true
nums.every((n) => n > 0); // true

/*

8. Callback Functions
A function passed as an argument to another function, to be called later.

*/

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greet("Alice", () => console.log("Done!"));

// Output:
// Hello, Alice
// Done!

/*

9. Recursion
A function that calls itself.


Every recursive function needs:

A base case (when to stop).

A recursive case (calling itself with a smaller input).

⚠️ Without a base case → infinite recursion → stack overflow.


*/

function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120

/*

10. Pure vs Impure Functions
    Pure Function
    Same input → same output, always.

    No side effects (doesn't modify external state).

*/

function add(a, b) {
  return a + b; // pure
}

// Impure Function
// Depends on or modifies external state.
let total = 0;
function addToTotal(n) {
  total += n; // modifies external variable → impure
}

/*

11. Function Methods
Functions are objects, so they have methods.

*/

// .call() — call with a specific this
function greet() {
  console.log("Hi, " + this.name);
}

const user = { name: "Alice" };
greet.call(user); // "Hi, Alice"

// .apply() — same as call, but args are an array
function add(a, b) {
  return a + b;
}
add.apply(null, [2, 3]); // 5

// .bind() — returns a new function with this locked in
const boundGreet = greet.bind(user);
boundGreet(); // "Hi, Alice"

/*

Template Literals in JavaScript
    A template literal is a way to create strings using backticks (`) instead of quotes (' or "). It was introduced in ES6 (ES2015) and gives you superpowers that regular strings don't have.

2. Key Features
    Template literals have three main superpowers:

    String interpolation — embed variables/expressions using ${}

    Multi-line strings — no need for \n

    Expression evaluation — run code inside ${}

3. String Interpolation with ${}
    The ${expression} syntax lets you embed variables, expressions, or function calls directly into a string.




*/

// Basic variable interpolation
let name = "Alice";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
//output:  "My name is Alice and I am 25 years old."

// Nested template literals
let items = ["apple", "banana", "cherry"];
let list = `Items: ${items.map((i) => `"${i}"`).join(", ")}`;
console.log(list);
//output:  'Items: "apple", "banana", "cherry"'

// 4. Multi-line Strings
// With regular strings, you need \n for new lines:

// Useful for HTML
const user = { name: "Alice", age: 25 };

const html = `
  <div class="user">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
  </div>
`;

console.log(html);
// <div class="user">
//   <h2>Alice</h2>
//   <p>Age: 25</p>
// </div>

/*

7. Tagged Templates (Advanced)
    A tagged template lets you call a function with the template literal's parts. The function is called the tag.


tagFunction`Hello ${name}, you are ${age}`;   

The tag function receives:

An array of strings (the literal parts).

The interpolated values as separate arguments


*/

function tag(strings, ...values) {
  console.log(strings); // ["Hello ", ", you are ", ""]
  console.log(values); // ["Alice", 25]
  return "processed";
}

let name1 = "Alice";
let age1 = 25;
let result = tag`Hello ${name1}, you are ${age1}`;
console.log(result); // "processed"

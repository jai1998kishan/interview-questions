/*

Destructuring in JavaScript
    Destructuring is a syntax that lets you unpack values from arrays or objects into separate variables — in a clean, readable way.

    Introduced in ES6 (ES2015), destructuring works with arrays and objects (and even function parameters).
*/

// Instead of accessing properties one by one:
const user = { name: "Alice", age: 25 };

// Old way
const name = user.name;
const age = user.age;

// You can do it in one line:
const { name1, age1 } = user; // ✨ destructuring

/*

1. Array Destructuring
Values are unpacked by position (index order).

*/
// Basic
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

// Skip elements with commas
const [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3  (2 is skipped)

// Fewer variables than items → extra items ignored
const [x, y] = [1, 2, 3, 4];
console.log(x, y); // 1 2

// More variables than items → extras are undefined
const [d, e, f, g] = [1, 2];
console.log(d, e, f, g); // 1 2 undefined undefined

// Default values
const [h = 10, i = 20] = [1];
console.log(h); // 1  (from array)
console.log(i); // 20 (default, since array had no 2nd item)

// Swap variables (classic trick)
let a1 = 1,
  b1 = 2;
[a1, b1] = [b1, a1];
console.log(a1, b1); // 2 1

// Rest in array destructuring
const [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // 1
console.log(rest); // [2, 3, 4]

// ⚠️ Rest must be last.
// const [...rest, last] = [1, 2, 3];   // ❌ SyntaxError

// Works with any iterable
const [a2, b2] = "hi";
console.log(a2, b2); // "h" "i"

const [x2, y2] = new Set([10, 20]);
console.log(x2, y2); // 10 20

/*

2. Object Destructuring
Values are unpacked by property name, not position.

⚠️ Variable names must match property names.
*/

// Basic
const user1 = { name2: "Alice", age2: 25, city2: "NYC" };

const { name2, age2, city } = user1;
console.log(name2); // "Alice"
console.log(age2); // 25
console.log(city2); // "NYC"
// ⚠️ Variable names must match property names.

// Rename with : (alias)
const user3 = { name3: "Alice", age3: 25 };

const { name3: userName, age3: userAge } = user3;

console.log(userName); // "Alice"
console.log(userAge); // 25

// Default values
const user4 = { name4: "Alice" };

const { name4, age4 = 30 } = user4;
console.log(name4); // "Alice"
console.log(age4); // 30 (default)

// Rename + default together
const { name5: userName5 = "Guest", age5: userAge5 = 18 } = {};
console.log(userName5); // "Guest"
console.log(userAge5); // 18

// Order doesn't matter (unlike arrays)
const { city6, name6 } = { name6: "Alice", city6: "NYC" };
console.log(city6); // "NYC"
console.log(name6); // "Alice"

// Rest in object destructuring
const user7 = { name7: "alice", age7: 25, city7: "NYC" };

const { name7, ...rest7 } = user7;
console.log(name7); // "Alice"
console.log(rest7); // { age: 25, city: "NYC" }

// Nested destructuring
const user8 = {
  name8: "Alice",
  address8: {
    city8: "NYC",
    zip8: "10001",
  },
};

const {
  name8,
  address8: { city8, zip8 },
} = user8;
console.log(name8); // "Alice"
console.log(city8); // "NYC"
console.log(zip8); //"10001"
// ⚠️ Notice: address itself is not created as a variable — only its contents.

// 3. Combining Array + Object
const data = {
  user10: {
    name10: "Alice",
    hobbies: ["reading", "coding", "hiking"],
  },
};

const {
  user10: {
    name10,
    hobbies: [firstHobby, ...otherHobbies],
  },
} = data;

console.log(name10); // "Alice"
console.log(firstHobby); // "reading"
console.log(otherHobbies); // ["coding", "hiking"]

/*

4. Destructuring in Function Parameters
Very common in real code — especially with React, Node, and API data.

*/

// Object parameter
function greet({ name, age }) {
  console.log(`Hi ${name}, you are ${age}`);
}

greet({ name: "Alice", age: 25 });
// "Hi Alice, you are 25"

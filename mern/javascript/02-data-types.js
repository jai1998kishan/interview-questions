/*

Data Types in JavaScript
    A data type is a classification of what kind of value a variable can hold — it tells JavaScript (and you) what operations are valid on that value.

    For example:

    You can add two numbers (2 + 3 → 5)

    You can concatenate two strings ("Hello" + "World")

    You cannot meaningfully multiply two booleans


JavaScript Has 8 Data Types
They're split into two big categories:

1. Primitive Types (7)
These are immutable (can't be changed) and stored by value.
    number, string, boolean, undefined, null, symbol, bigint

2. Non-Primitive Type (1)
Stored by reference and mutable.
    Objects 

*/

/*

4. Undefined
A variable that's declared but not assigned a value.

5. Null
Intentional absence of a value — you set it yourself.

6. Symbol
A unique, immutable identifier (added in ES6). Often used as object keys.


7. BigInt
For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1). Add n at the end.

8. Object
A collection of key-value pairs. Everything non-primitive is an object.


*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false — every symbol is unique
console.log(typeof id1); // "symbol"

const big = 9007199254740991n;
console.log(typeof big); // "bigint"
console.log(big + 1n); // 9007199254740992n
// console.log(big + 1);            // ❌ TypeError — can't mix BigInt & Number

const person = { name: "Alice", age: 25 }; // object
const arr = [1, 2, 3]; // array (an object)
const fn = function () {}; // function (an object)
const date = new Date(); // date (an object)

console.log(typeof person); // "object"
console.log(typeof arr); // "object"
console.log(typeof fn); // "function"  ⚠️ (special case)

/*

Primitive vs. Object (Reference) Types

Primitives — copied by VALUE

Objects — copied by REFERENCE


Visualized:

Primitives:

a → 10
b → 10      (independent copies)

Objects:
obj1 ─┐
      ├──► { name: "Bob" }   (same object in memory)
obj2 ─┘

*/

let a = 10;
let b = a; // b gets a COPY of 10

b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 points to the SAME object

obj2.name = "Bob";
console.log(obj1.name); // "Bob" 😲 (changed too!)
console.log(obj2.name); // "Bob"

// To actually copy an object:
let obj2 = { name: "Alice" };

let obj3 = { ...obj2 }; // shallow copy
let obj4 = Object.assign({}, obj2); // shallow copy

obj3.name = "Bob";
console.log(obj2.name); // "Alice" ✅ (unchanged)

/*

Bonus: typeof vs instanceof
    typeof → tells you the primitive type (or "object" / "function")

    instanceof → checks if an object was created from a specific class/constructor

*/

const arr = [];
console.log(typeof arr); // "object"
console.log(arr instanceof Array); // true

const date = new Date();
console.log(date instanceof Date); // true

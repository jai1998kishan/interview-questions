/*

1. Declaration Keywords
    The most accurate/technical term — they're keywords used to declare variables.

    "var, let, and const are declaration keywords in JavaScript."


In Spec Terms (ECMAScript)
    In the official ECMAScript specification, they're part of:

    VariableStatement → uses var

    LexicalDeclaration → uses let or const

*/

/**
var (Function-scoped)
    Scope: Function-scoped (or global if declared outside a function)

    Hoisting: Hoisted and initialized with undefined

    Re-declaration: Can be re-declared in the same scope

    Re-assignment: Can be re-assigned



 */

var x = 10;
var x = 20; // ✅ Allowed (re-declaration)
x = 30; // ✅ Allowed (re-assignment)

if (true) {
  var y = 5;
}
console.log(y); // 5 (leaks out of block)

console.log(z); // undefined (hoisted)
var z = 1;

/**
let (Block-scoped)
    Scope: Block-scoped (any { })

    Hoisting: Hoisted but NOT initialized (Temporal Dead Zone)

    Re-declaration: ❌ Cannot re-declare in the same scope

    Re-assignment: ✅ Can be re-assigned

    
 */

let a = 10;
// let a = 20; // ❌ SyntaxError
a = 30; // ✅ Allowed

if (true) {
  let b = 5;
}
// console.log(b); // ❌ ReferenceError

// console.log(c); // ❌ ReferenceError (TDZ)
let c = 1;

/**
const (Block-scoped, constant binding)
    Scope: Block-scoped

    Hoisting: Hoisted but NOT initialized (TDZ)

    Re-declaration: ❌ Not allowed

    Re-assignment: ❌ Not allowed (must be initialized at declaration)

    Note: Objects/arrays declared with const can still have their contents mutated

 */

// Why const Objects/Arrays Can Still Be Mutated

const person = { name: "Alice", age: 25 };

// ✅ ALLOWED — mutating contents
person.age = 26;
person.city = "NYC";
delete person.name;

console.log(person); // { age: 26, city: "NYC" }

const numbers = [1, 2, 3];

// ✅ ALLOWED — mutating contents
numbers.push(4); // [1, 2, 3, 4]
numbers[0] = 100; // [100, 2, 3, 4]
numbers.pop(); // [100, 2, 3]
numbers.length = 0; // []

console.log(numbers); // []

const person = { name: "Alice" };

// ❌ NOT ALLOWED — re-assigning the binding
person = { name: "Bob" }; // TypeError: Assignment to constant variable

const numbers = [1, 2, 3];

// ❌ NOT ALLOWED — re-assigning the binding
numbers = [4, 5, 6]; // TypeError: Assignment to constant variable

// Primitive example (immutable anyway):
const n = 10;
n = 20; // ❌ TypeError
n++; // ❌ TypeError (tries to re-assign)

const s = "hello";
s[0] = "H"; // Silently fails — strings are immutable
console.log(s); // "hello"

/*

How to Actually Freeze an Object
    If you want true immutability, use Object.freeze()


    ⚠️ Object.freeze is shallow
    Nested objects are NOT frozen:

*/

const person = Object.freeze({ name: "Alice", age: 25 });

person.age = 26; // ❌ Silently fails (or throws in strict mode)
person.city = "NYC"; // ❌ Silently fails
delete person.name; // ❌ Silently fails

console.log(person); // { name: "Alice", age: 25 }

const config = Object.freeze({
  theme: "dark",
  colors: { primary: "blue" }, // nested object NOT frozen
});

config.theme = "light"; // ❌ Blocked
config.colors.primary = "red"; // ✅ STILL WORKS! (nested)

// Deep freeze (manual):
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}

const config = deepFreeze({
  theme: "dark",
  colors: { primary: "blue" },
});

config.colors.primary = "red"; // ❌ Now blocked

/*

const  →  locks the "pointer" (binding)
          ┌──────────────┐
x ──────► │  { ... }     │  ← contents freely mutable
          └──────────────┘
          
x = newObj  ❌ blocked
x.prop = v  ✅ allowed


*/

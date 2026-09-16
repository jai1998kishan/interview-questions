/*

Operators in JavaScript
    An operator is a special symbol that performs an operation on one or more values (called operands) and produces a result.

5              +           3
↑              ↑           ↑
operands    operator     operands         


Categories of Operators
JavaScript has several categories:

Category	                Examples
Arithmetic	            +, -, *, /, %, **
Assignment	            =, +=, -=, *=, /=, %=, **=
Comparison	            ==, ===, !=, !==, >, <, >=, <=
Logical	                &&, ||, !, ??
Increment/Decrement	    ++, --
String	                + (concatenation)
Ternary	                ? :
Type	                typeof, instanceof
Bitwise	                &, |, ^, ~, <<, >>, >>>
Spread/Rest	            ...
Optional Chaining       ?.
Nullish Coalescing	    ??
Comma	                ,
delete, in, void	    special


⚠️ The + Operator Is Special
+ does addition OR string concatenation depending on types:

5 + 3          // 8       (number + number)
"5" + 3        // "53"    (string + number → string)
5 + "3"        // "53"    (number + string → string)
"a" + "b"      // "ab"    (string + string)
5 + 3 + "x"    // "8x"    (left to right: 5+3=8, then "8"+"x")
"x" + 5 + 3    // "x53"   (left to right: "x"+"5"="x5", then "x5"+"3"="x53")


4. Logical Operators
⚠️ && and || Don't Always Return Booleans
They return one of the operands, based on truthiness.

"hello" && "world"    // "world"   (both truthy → returns last)
0 && "world"          // 0         (0 is falsy → returns first falsy)
"hello" || "world"    // "hello"   (first truthy is returned)
0 || "world"          // "world"   (0 is falsy → returns next)



Short-Circuit Evaluation
    JavaScript stops early if the result is already known:

    false && doSomething(); // doSomething() is NOT called
    true || doSomething(); // doSomething() is NOT called


*/

console.log("hello" && "world");
console.log(1 && 2);

// let name = userInput || "Guest"; // uses "Guest" if userInput is falsy

/*

Nullish Coalescing ??
    Returns the right side only if the left is null or undefined (not just falsy).


0 ?? "default"          // 0        (0 is not null/undefined)
"" ?? "default"         // ""       (empty string is kept)
null ?? "default"       // "default"
undefined ?? "default"  // "default"

// Compare with ||
0 || "default"          // "default"  (0 is falsy)
"" || "default"         // "default"  ("" is falsy)



7. Ternary Operator
    A shortcut for if...else — the only operator with three operands.
    condition ? valueIfTrue : valueIfFalse


8. Type Operators
typeof — returns the type of a value 
typeof 42                   // "number"
typeof "hello"              // "string"
typeof true                 // "boolean"
typeof undefined            // "undefined"
typeof null                 // "object"  ⚠️ bug
typeof {}                   // "object"
typeof []                   // "object"
typeof function(){}         // "function"


instanceof — checks if an object is an instance of a class
    let arr = [];
    arr instanceof Array   // true

    let date = new Date();
    date instanceof Date   // true
    date instanceof Array  // false


9. Bitwise Operators
    Operate on the binary (bit) representation of numbers. Rarely used in day-to-day code, but useful for certain algorithms.

Operator	     Name	                Example	    Result
&	             AND	                5 & 3	    1
|	             OR	                    5 | 3	    7
^	             XOR	                5 ^ 3	    6
~	             NOT	                ~5	        -6  
<<	             Left shift	            5 << 1	    10
>>	             Right shift	        5 >> 1	    2
>>>	             Unsigned right shift	5 >>> 1	    2


*/

5 & 3; // 0101 & 0011 = 0001 = 1
5 | 3; // 0101 | 0011 = 0111 = 7
5 ^ 3; // 0101 ^ 0011 = 0110 = 6
5 << 1; // 0101 << 1 = 1010 = 10

/*

10. Spread / Rest Operator (...)
    The ... symbol has two uses depending on context.

*/

// Spread — expands an iterable into individual elements
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3

let combined = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Rest — collects remaining items into an array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

/*

11. Optional Chaining (?.)
    Safely access nested properties. Returns undefined instead of throwing an error if a property is null or undefined.



*/

let user = { name: "Alice" };

console.log(user.address); // undefined
console.log(user.address.city); // ❌ TypeError: Cannot read property 'city' of undefined

console.log(user.address?.city); // undefined ✅ (no error)

// Also works with methods and arrays:
user.getName?.(); // calls getName only if it exists
arr?.[0]; // accesses index only if arr exists

/*

12. Comma Operator
Evaluates multiple expressions and returns the last one. Rarely used.

*/

let x = (1, 2, 3);
console.log(x); // 3

/*

13. Special Operators
Operator	        Purpose
delete	        Removes a property from an object
in	            Checks if a property exists in an object
void	        Evaluates an expression and returns undefined

*/

let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

console.log("b" in obj); // true
console.log("a" in obj); // false

console.log(void 0); // undefined

/*

Operator Precedence
    When multiple operators are used, JavaScript follows a precedence order (like PEMDAS in math).

2 + 3 * 4       // 14 (not 20 — * has higher precedence (2 + 3) * 4     // 20 (parentheses override)



Common precedence (high → low):

1. () — grouping

2. ++, --, ! (unary)

3. **

4. *, /, %

5. +, -

6. <, >, <=, >=

7. ==, ===, !=, !==

8. &&

9. ||, ??

10. ? : (ternary)

11. = (assignment)

Tip: Use parentheses when in doubt — it's clearer and safer.


*/

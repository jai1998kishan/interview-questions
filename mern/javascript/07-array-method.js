/*

1. Adding & Removing Elements
These methods mutate (change) the original array.

push() — add to the end

*/

const arr = [1, 2, 3];
arr.push(4); // returns new length: 4
console.log(arr); // [1, 2, 3, 4]

arr.push(5, 6); // add multiple
console.log(arr); // [1, 2, 3, 4, 5, 6]

/*

pop() — remove from the end

*/

const arr = [1, 2, 3];
const removed = arr.pop(); // returns removed element: 3
console.log(arr); // [1, 2]

/*

unshift() — add to the beginning

*/
const arr = [2, 3];
arr.unshift(1); // returns new length: 3
console.log(arr); // [1, 2, 3]

/*

shift() — remove from the beginning

*/

const arr = [1, 2, 3];
const removed = arr.shift(); // returns 1
console.log(arr); // [2, 3]

/*

splice() — add/remove anywhere (the Swiss Army knife)

*/

// splice(start, deleteCount, ...itemsToAdd)
const arr = [1, 2, 3, 4, 5];

arr.splice(2, 1); // remove 1 item at index 2
console.log(arr); // [1, 2, 4, 5]

arr.splice(1, 2, "a", "b"); // remove 2 items at index 1, insert "a","b"
console.log(arr); // [1, "a", "b", 5]

arr.splice(1, 0, "new"); // insert without removing
console.log(arr); // [1, "new", "a", "b", 5]

// Returns an array of removed items.

/*

2. Iteration Methods
forEach() — run a function on each element

Returns: undefined (used for side effects).

Cannot break out of it early.
*/

const nums = [1, 2, 3];
nums.forEach((value, index, array) => {
  console.log(index, value);
});

// Returns: undefined (used for side effects).

// Cannot break out of it early.

/*

3. Transformation Methods
These do NOT mutate the original — they return a new array.

*/

/*

map() — transform each element
*/

const nums = [1, 2, 3, 4];

const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(nums); // [1, 2, 3, 4] (unchanged)

// With objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const names = users.map((u) => u.name);
console.log(names); // ["Alice", "Bob"]

/*

filter() — keep elements that pass a test
*/

const nums = [1, 2, 3, 4, 5, 6];

const evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 30 },
];
const adults = users.filter((u) => u.age >= 18);
console.log(adults); // [{ Alice }, { Carol }]

/*

reduce() — boil array down to a single value

*/

// reduce(callback, initialValue)
// callback(accumulator, currentValue, index, array)

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

// Max value
const max = nums.reduce((acc, n) => (n > acc ? n : acc), nums[0]);
console.log(max); // 4

// Count occurrences
const words = ["a", "b", "a", "c", "b", "a"];
const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 3, b: 2, c: 1 }

/*

flat() — flatten nested arrays

*/

const nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

/*

flatMap() — map() then flat(1)
*/

const arr = [1, 2, 3];
const result = arr.flatMap((n) => [n, n * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

/*

4. Searching Methods
find() — first element that matches

*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

// Returns undefined if not found.

/*

findIndex() — index of first match

*/
const nums = [10, 20, 30];
const index = nums.findIndex((n) => n === 20);
console.log(index); // 1
// Returns -1 if not found.

/*

findLast() / findLastIndex() (ES2023)

*/
const nums = [1, 2, 3, 2, 1];
console.log(nums.findLast((n) => n === 2)); // 2 (last occurrence)
console.log(nums.findLastIndex((n) => n === 2)); // 3

/*

indexOf() — first index of a value

*/
const arr = [1, 2, 3, 2, 1];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(99)); // -1 (not found)

/*

lastIndexOf() — last index of a value

*/
const arr = [1, 2, 3, 2, 1];
console.log(arr.lastIndexOf(2)); // 3

/*

includes() — does the array contain this value?
*/

const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false

// Works with NaN (unlike indexOf)
console.log([NaN].includes(NaN)); // true

/*

5. Testing Methods
All return a boolean.

some() — is there at least one match?
*/
const nums = [1, 2, 3, 4];
console.log(nums.some((n) => n > 3)); // true
console.log(nums.some((n) => n > 10)); // false

/*

every() — do all match?

*/

const nums = [2, 4, 6];
console.log(nums.every((n) => n % 2 === 0)); // true
console.log(nums.every((n) => n > 5)); // false

/*

6. Sorting & Reversing
Both mutate the original array.

sort() — sort in place

*/
// Default: converts to strings and sorts lexicographically => it check first letter if first same then it check 2nd letter so on
const nums = [10, 1, 5, 25];
nums.sort();
console.log(nums); // [1, 10, 25, 5] ⚠️ (wrong for numbers!)

// Correct — provide a compare function
const nums2 = [10, 1, 5, 25];
nums2.sort((a, b) => a - b);
console.log(nums2); // [1, 5, 10, 25]

// Descending
nums2.sort((a, b) => b - a); // [25, 10, 5, 1]

/*

toSorted() (ES2023) — returns a new sorted array

*/
const nums = [3, 1, 2];
const sorted = nums.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3]
console.log(nums); // [3, 1, 2] (unchanged ✅)

/*

reverse() — reverse in place
*/
const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

/*

toReversed() (ES2023) — returns a new reversed array
*/
const arr = [1, 2, 3];
const rev = arr.toReversed();
console.log(rev); // [3, 2, 1]
console.log(arr); // [1, 2, 3] ✅

/*

7. Slicing & Concatenating
slice() — copy a portion (does NOT mutate)

*/
// slice(start, end) — end is exclusive
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(2)); // [3, 4, 5]
console.log(arr.slice(-2)); // [4, 5] (from end)
console.log(arr); // [1, 2, 3, 4, 5] unchanged

/*

concat() — join arrays

*/
const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log(c); // [1, 2, 3, 4]

// You can pass values too
console.log(a.concat(5, [6, 7])); // [1, 2, 5, 6, 7]

/*

8. Converting to/from Strings
join() — array → string

*/

const arr = ["a", "b", "c"];
console.log(arr.join()); // "a,b,c"
console.log(arr.join("")); // "abc"
console.log(arr.join(" - ")); // "a - b - c"

/*

split() (string method, opposite of join)

*/
const str = "a,b,c";
console.log(str.split(","));

/*

toString() — array → comma-separated string
*/

console.log([1, 2, 3].toString()); //"1,2,3"

/*

9. Copying & Filling
Spread (...) — copy an array
*/
const arr = [1, 2, 3];
const copy = [...arr];
copy.push(4);

console.log(copy); // [1, 2, 3, 4]
console.log(arr); // [1, 2, 3] ✅

/*

Array.from() — create array from iterable/array-like
*/
console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]
console.log(Array.from([1, 2], (x) => x * 2)); // [2, 4]
console.log(Array.from({ length: 3 }, (_, i) => i)); // [0, 1, 2]

/*

Array.of() — create array from arguments

*/
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

// Difference from new Array()
console.log(new Array(3)); // [ <3 empty items> ] (length 3)
console.log(Array.of(3)); // [3] ✅

/*

fill() — fill with a value (mutates)
*/
const arr = [1, 2, 3, 4];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0]

arr.fill(9, 1, 3); // fill with 9 from index 1 to 3 (exclusive)
console.log(arr); // [0, 9, 9, 0]

/*

copyWithin() — copy part of array to another position (mutates)
*/
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // copy from index 3 to index 0
console.log(arr); // [4, 5, 3, 4, 5]

/*

10. Other Useful Methods
at() — access element by index (supports negatives)

*/
const arr = [1, 2, 3, 4];
console.log(arr.at(0)); // 1
console.log(arr.at(-1)); // 4 ✅ (last element)
console.log(arr[arr.length - 1]); // 4 (old way)

/*

with() (ES2023) — change an element without mutating
*/
const arr = [1, 2, 3];
const newArr = arr.with(1, 99);
console.log(newArr); // [1, 99, 3]
console.log(arr); // [1, 2, 3] ✅

/*

keys(), values(), entries() — iterators
*/
const arr = ["a", "b"];

for (const index of arr.keys()) console.log(index); // 0, 1
for (const value of arr.values()) console.log(value); // "a", "b"
for (const [i, v] of arr.entries()) console.log(i, v); // 0 "a", 1 "b"

/*

Array.isArray() — check if it's an array
*/
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("hi")); // false
console.log(Array.isArray({})); // false

/*

Mutating vs Non-Mutating — Cheat Sheet
Mutates original ❌	        Returns new array ✅
push(), pop()	                map()
shift(), unshift()	            filter()
splice()	                    slice()
sort(), reverse()	            toSorted(), toReversed()
fill(), copyWithin()	        concat(), flat(), flatMap()
                                with(), toSpliced()

*/

/*

13. Quick Reference Table
Method	    Purpose	                Mutates?	            Returns
push	    Add to end	            ✅	                    new length
pop	        Remove from end	        ✅	                    removed item
unshift	    Add to start	        ✅	                    new length
shift	    Remove from start	    ✅	                    removed item
splice	    Add/remove anywhere	    ✅	                    removed items
slice	    Copy a portion	        ❌	                    new array
concat	    Join arrays	            ❌	                    new array
join	    Array → string	        ❌	                    string
map	        Transform each	        ❌	                    new array
filter	    Keep matches	        ❌	                    new array
reduce	    Reduce to one value	    ❌	                    any
forEach	    Loop	                ❌	                    undefined
find	    First match	            ❌	                    element
findIndex	Index of first match	❌	                    number
indexOf	    First index of value	❌	                    number
includes	Contains?	            ❌	                    boolean
some	    Any match?	            ❌	                    boolean
every	    All match?	            ❌	                    boolean
sort	    Sort	                ✅	                    sorted array
reverse	    Reverse	                ✅	                    reversed array
flat	    Flatten	                ❌	                    new array
flatMap	    Map + flatten	        ❌	                    new array
fill	    Fill values	            ✅	                    modified array
at	        Access by index	        ❌	                    element
with	    Replace at index	    ❌	                    new array

*/

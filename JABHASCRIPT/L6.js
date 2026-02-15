
//  * JAVASCRIPT ARRAY OPERATIONS –


// ---------- 1. Create Arrays ----------
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(6, 7, 8);

console.log("Initial arrays:", arr, arr2);

// ---------- 2. Access Elements ----------
console.log("First element:", arr[0]);
console.log("Array length:", arr.length);

// ---------- 3. Add Elements ----------
arr.push(6);            // add at end
arr.unshift(0);         // add at beginning
console.log("After push & unshift:", arr);

// ---------- 4. Remove Elements ----------
arr.pop();              // remove from end
arr.shift();            // remove from beginning
console.log("After pop & shift:", arr);

// ---------- 5. Iteration ----------
console.log("forEach:");
arr.forEach((value, index) => {
    console.log(index, value);
});

console.log("for...of:");
for (let value of arr) {
    console.log(value);
}

// ---------- 6. map() ----------
let doubled = arr.map(num => num * 2);
console.log("map (doubled):", doubled);

// ---------- 7. filter() ----------
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log("filter (even):", evenNumbers);

// ---------- 8. reduce() ----------
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum);

// ---------- 9. find() & findIndex() ----------
let firstGreaterThan3 = arr.find(num => num > 3);
let indexGreaterThan3 = arr.findIndex(num => num > 3);
console.log("find:", firstGreaterThan3);
console.log("findIndex:", indexGreaterThan3);

// ---------- 10. includes() & indexOf() ----------
console.log("includes 3:", arr.includes(3));
console.log("indexOf 3:", arr.indexOf(3));

// ---------- 11. some() & every() ----------
console.log("some > 4:", arr.some(num => num > 4));
console.log("every > 0:", arr.every(num => num > 0));

// ---------- 12. slice() ----------
let sliced = arr.slice(1, 4);
console.log("slice (1,4):", sliced);
console.log("original after slice:", arr);

// ---------- 13. splice() ----------
let spliced = arr.splice(1, 2, 100, 200);
console.log("splice removed:", spliced);
console.log("array after splice:", arr);

// ---------- 14. sort() ----------
let unsorted = [10, 3, 25, 1];
unsorted.sort((a, b) => a - b);
console.log("sorted:", unsorted);

// ---------- 15. reverse() ----------
unsorted.reverse();
console.log("reversed:", unsorted);

// ---------- 16. concat() ----------
let merged1 = arr.concat(arr2);
console.log("concat:", merged1);

// ---------- 17. Spread Operator ----------
let merged2 = [...arr, ...arr2];
console.log("spread merge:", merged2);

// ---------- 18. join() ----------
let joined = arr.join("-");
console.log("join:", joined);

// ---------- 19. split() ----------
let splitArr = "a,b,c".split(",");
console.log("split:", splitArr);

// ---------- 20. flat() ----------
let nested = [[1, 2], [3, 4], [5]];
console.log("flat:", nested.flat());

// ---------- 21. fill() ----------
let filled = new Array(5).fill(0);
console.log("fill:", filled);

// ---------- 22. at() ----------
console.log("at(0):", arr.at(0));
console.log("at(-1):", arr.at(-1));

// ---------- 23. keys(), values(), entries() ----------
console.log("keys:");
for (let key of arr.keys()) {
    console.log(key);
}

console.log("values:");
for (let value of arr.values()) {
    console.log(value);
}

console.log("entries:");
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}

// ---------- 24. Array.from() ----------
let fromString = Array.from("HELLO");
console.log("Array.from:", fromString);

// ---------- 25. Destructuring ----------
let [a, b, c] = arr;
console.log("destructuring:", a, b, c);

// ---------- 26. Copy Array ----------
let copy = [...arr];
console.log("copy:", copy);

// ---------- 27. Reduce to Object ----------
let users = [
    { id: 1, name: "Ritwik" },
    { id: 2, name: "Rahul" }
];

let userObject = users.reduce((acc, curr) => {
    acc[curr.id] = curr.name;
    return acc;
}, {});

console.log("reduce to object:", userObject);

/***************************************
 * END OF ARRAY OPERATIONS
 ***************************************/

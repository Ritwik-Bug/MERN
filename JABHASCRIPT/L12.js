// Original object
let rit = {
    age: 21,
    wt: 60,
    ht: 180
};

console.log("Original:", rit);


// ==============================
// Method 1: Spread Operator (...)
// ==============================
// Creates a shallow copy

let dost1 = { ...rit };

dost1.age = 22; // Changes only dost1

console.log("Spread Clone:", dost1);
console.log("Original after spread clone:", rit);


// ==============================
// Method 2: Object.assign()
// ==============================
// Copies properties from source to target object

let dost2 = Object.assign({}, rit);

dost2.wt = 65;

console.log("Assign Clone:", dost2);
console.log("Original after assign clone:", rit);


// ==============================
// Method 3: Manual Copy
// ==============================
// Copy each property individually

let dost3 = {
    age: rit.age,
    wt: rit.wt,
    ht: rit.ht
};

dost3.ht = 190;

console.log("Manual Clone:", dost3);
console.log("Original after manual clone:", rit);


// Create an object
let person = {
    name: "Ritwik",
    age: 21
};

// person references the object
console.log(person);

// Remove the reference
person = null;

// Now no variable points to that object
// Garbage Collector will eventually remove it
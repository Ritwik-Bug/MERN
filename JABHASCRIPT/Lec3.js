// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3. do...while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// 4. for...of loop (for arrays and iterables)
const arr = ['a', 'b', 'c'];
for (const item of arr) {
    console.log(item);
}

// 5. for...in loop (for object properties)
const obj = { name: 'John', age: 30 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// 6. forEach() method
arr.forEach((item, index) => {
    console.log(index, item);
});

for(let i=0;i<5;i++){
    if(i==3){
        continue; // Skip the rest of the loop when i is 3
    }
    else{
        console.log(i);
    }
}

let firstname="Ritwik";
let lastname='BADMASH';

// Template literals (using backticks)
let name=`Ritwik
don
jai baba ki`; 



console.log(firstname+" "+lastname); // Concatenation using + operator

console.log(typeof (firstname)); // Output: string
console.log(typeof (lastname)); // Output: string

console.log(lastname);
console.log(name);


// operations on string
let str1="Hello";
let str2="World";
console.log(str1 + " " + str2); // Concatenation
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.includes("lo"));   

let Final=`${str1} and ${str2}`;
console.log(Final);

let str='muaaah';
console.log(str.substring(0, 3)); // Output: 'mua'
// ending character ko include nahi karta hai
console.log(str.slice(0, 3)); // Output: 'mua'



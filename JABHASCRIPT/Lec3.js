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
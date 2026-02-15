// [ for array ]
// { for object }

let obj={
    "name":"Ritwik",
    age: 25,

    greet: function() {
        console.log("Hello " + this.name);
    }
};
console.log(obj.name);
obj.greet();

// shallow copy
// in shallow copy, only the reference of the object is copied, 
// not the actual object itself. So, if we modify the copied object, 
// it will also affect the original object.
let obj1 = { 
    name: "Ritwik", 
    marks: { maths: 90 } 
};

let obj2 = { ...obj1 };   // shallow copy

obj2.marks.maths = 100;

console.log(obj1.marks.maths); // 100 (changed!)

// deep copy
// in deep copy, a new object is created and all the properties of the original 
// object are copied to the new object.
let obj3 = { 
    name: "Ritwik", 
    marks: { maths: 90 } 
};

let obj4 = structuredClone(obj3);   // deep copy

obj4.marks.maths = 100;

console.log(obj3.marks.maths); // 90 (not changed)



let colors = ["red", "green", "blue"];

console.log(colors);
console.log(colors[0]);  // Access first element


let numbers = [10, 20, 30, 40];
console.log(numbers[2]);

let fruits = ["apple", "banana"];

fruits.push("mango");
console.log(fruits);

fruits.pop();
console.log(fruits);


let marks = [80, 75, 90];
console.log(marks.length);



let products = ["Kurti", "Saree", "Lehenga"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

let arr=[10,20,30,40,50];

let evenArray=arr.filter(function(number){
    return number%2===0;
});

console.log(evenArray);

let ar=[1,2,'ritwik',null];

let ans=ar.filter((value)=>{
    if(typeof value === 'string'){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);


let arr2 = [1, 2, 3, 4];
let sum = arr2.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

console.log(sum); // 10

// Accumulator is the value that is returned by the 
// callback function in the previous iteration.

// Current value is the current element being processed 
// in the array.



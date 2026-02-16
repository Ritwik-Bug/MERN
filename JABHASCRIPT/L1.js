// we dont use var because it is function scoped,it cannot be used 
// outside the function but let and const are block scoped they can be used
// outside the block also.
// var age=20;


let age1=21;

age1=40;
age1=null;
// we can change the value of let variable but we cannot re declare it.

console.log(age1);

const a=21;
console.log(a);
// we cannot change the value of const variable and also we cannot re declare it.
// a=30; // it will give error
// console.log(a);


// primitve data types
// immutable data types
// number
let marks = 85;
console.log(marks);      
console.log(typeof marks); 

// string
let name = "Ritwik";
console.log(name);        
console.log(typeof name); 

// boolean
let isPassed = true;
console.log(isPassed);        
console.log(typeof isPassed); 

// non primitive data types
// mutable data types
// object
let student = {
  name: "Ritwik",
  age: 20,
  course: "CSE"
};
console.log(student.name); 

// array
let subjects = ["Math", "Physics", "JavaScript"];
console.log(subjects[1]); 

// date
let today = new Date();
console.log(today);
console.log(typeof today);

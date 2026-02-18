// global scope
// we can not access the variable before declaration
// and we can access the variable after declaration anywhere in the global scope 
// or in the whole file

var age=15;
console.log(age); 

{
    console.log(age);
}

if(true){
    console.log(age);
}

function sayHello(){
    console.log(age);
}
sayHello();


// function scope
// we can not access the variable before declaration
// and we can access the variable after declaration anywhere in the function scope

function sayHi(){
    const fullname="Ritwik";
    console.log(fullname);
}

console.log(fullname); // ReferenceError: fullname is not defined
sayHi();


// block scope
// we can not access the variable before declaration
// and we can access the variable after declaration anywhere in the block scope

{
    var height=180;
    console.log(height);
}

console.log(height); // 180, because var is function scoped, not block scoped


{
    let width=100;
    console.log(width);
}
console.log(width); // ReferenceError: width is not defined, because let is block scoped

{
    const depth=50;
    console.log(depth); 
}
console.log(depth); // ReferenceError: depth is not defined, because const is block scoped


// Temporal Dead Zone
// Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables 
// declared with let and const are not accessible before their declaration. 
// This means that if you try to access a variable before it has been declared, 
// you will get a ReferenceError.
// The Temporal Dead Zone is the time period between the start of a block’s execution 
// and the actual declaration of a let or const variable, 
// during which the variable exists but cannot be accessed.

console.log(a); // ❌ ReferenceError
let a = 10;

console.log(x); // undefined
var x = 5;

console.log(z); // ❌ ReferenceError
const z = 20;

{
  console.log(b); // ❌ ReferenceError (TDZ)
  let b = 30;
}


// Why TDZ Exists

// The Temporal Dead Zone helps:
// Prevent bugs caused by accessing variables before initialization
// Encourage clean and predictable code
// Enforce safer scoping rules compared to var

// With var
// Memory is allocated
// It is initialized with undefined
// So accessing it is allowed

// With let / const
// Memory is allocated
// But not initialized
// It stays in the Temporal Dead Zone
// Accessing it before initialization throws ReferenceError


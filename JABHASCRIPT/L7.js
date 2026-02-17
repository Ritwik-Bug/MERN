// Hoisting in JavaScript
// In JavaScript, hoisting is a behavior in which variable and 
// function declarations are moved to the top of their containing scope 
// during the compilation phase. This means that you can use variables and 
// functions before they are declared in the code.

sayMyName("Jabha");

function sayMyName(finalname){
    console.log("My name is " + finalname);
} 
// sayMyName("Jabha");


// variable hoisting
// When a variable is declared using var, it is hoisted to the top of
//  its scope, but its initialization is not hoisted. This means that 
// the variable is 
// undefined until it is assigned a value.
// var age only this will go not the declaration and initialization
 console.log(age);
var age=25;
// console.log(age); // Output: 25


// this will give error because let and const are not hoisted in the same way as var.
console.log(bc);
let bc=21;



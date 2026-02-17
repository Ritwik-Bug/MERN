// Function Call stack
// When a function is called, it is added to the call stack. 
// The call stack is a data structure that keeps track of the function calls in a program. 
// When a function is called, it is added to the top of the call stack. 
// When a function returns, it is removed from the top of the call stack.


function greetme(greet,fullname){
    console.log("greet ",fullname);
    greet();
}

function greet(){
    console.log("Hello World");
}
// greet(); 

greetme(greet,"JabhaScript");


const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]   

let first=arr[0];
let ans= first(5,10);
console.log(ans);
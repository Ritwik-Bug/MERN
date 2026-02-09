// Functions
// 1. Function Declaration
function add(a, b) {
  return a + b;
}

// 2. Function Expression
const multiply = function (a, b) {
  return a * b;
};

// 3. Arrow Function
const subtract = (a, b) => a - b;

// 4. Arrow Function with Block Body
const divide = (a, b) => {
  if (b === 0) {
    return "Division by zero not allowed";
  }
  return a / b;
};

// 5. Function with Default Parameters
function greet(name = "User") {
  return "Hello " + name;
}

// 6. Function with Return Value
function square(n) {
  return n * n;
}

// 7. Function without Return (Void Function)
function displayMessage(message) {
  console.log(message);
}

// 8. Anonymous Function
setTimeout(function () {
  console.log("This is an anonymous function");
}, 1000);

// 9. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();

// 10. Callback Function
function processData(data, callback) {
  callback(data);
}

processData("JS Functions", function (msg) {
  console.log(msg);
});

// Function Calls
add(2, 3);
multiply(2, 3);
subtract(5, 2);
divide(10, 2);
greet("Ritwik");
square(4);
displayMessage("Functions in JavaScript");

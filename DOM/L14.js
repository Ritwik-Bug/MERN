// DOM
// Document Object Model
// The DOM is a programming interface for HTML and XML documents. 
// It represents the structure of a document as a tree of nodes, 
// allowing programs to dynamically access and update the content, structure,
// and style of a document.
// is a tree-like representation of an HTML document created by the browser.

// there is one global object in the browser called window, which represents the browser window.
// it is top in the hierarchy of the DOM tree. The window object contains the document object, 
// which represents the HTML document loaded in the browser.

// JavaScript uses the DOM to:
// Access HTML elements
// Change content
// Change styles
// Add or remove elements
// Handle events (button clicks, form submissions, etc.)

// four pillar of DOM
// selection of an element
var a=document.querySelector("h1")
console.log(a)

// changing html
var a=document.querySelector("h1")
// this changes the html
a.innerHTML="Hello World"

// changing css
var a=document.querySelector("h1")
a.style.color="blue"
a.style.fontSize="50px"
a.style.backgroundColor="yellow"

// EVENT listener
var a=document.querySelector("h1")
a.addEventListener("click",function(){
    // console.log("HEYYY")
    a.innerHTML="You clicked me"
    a.style.color="red"
})


// ===============================
// SELECTING ELEMENTS
// ===============================

// Select element by ID
const heading = document.getElementById("heading");

// Select first element with class
const box = document.querySelector(".box");

// Select first matching CSS selector
const para = document.querySelector("p");

// Select all matching elements (returns NodeList)
const allParas = document.querySelectorAll("p");

// Select elements by class name (HTMLCollection)
const cards = document.getElementsByClassName("card");

// Select elements by tag name (HTMLCollection)
const divs = document.getElementsByTagName("div");

// Select elements by name attribute
const inputs = document.getElementsByName("username");


// ===============================
// CHANGING CONTENT
// ===============================

// Change text only
heading.innerText = "Hello World";

// Change HTML content
heading.innerHTML = "<b>Hello World</b>";

// Get text content
console.log(heading.textContent);


// ===============================
// CHANGING ATTRIBUTES
// ===============================

// Set attribute
heading.setAttribute("class", "title");

// Get attribute
console.log(heading.getAttribute("class"));

// Remove attribute
heading.removeAttribute("class");

// Check attribute exists
console.log(heading.hasAttribute("id"));


// ===============================
// CHANGING CSS
// ===============================

// Change single CSS property
heading.style.color = "red";

// Change multiple properties
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";


// ===============================
// CLASS METHODS
// ===============================

// Add class
heading.classList.add("active");

// Remove class
heading.classList.remove("active");

// Toggle class
heading.classList.toggle("dark");

// Check class exists
console.log(heading.classList.contains("dark"));


// ===============================
// CREATING ELEMENTS
// ===============================

// Create new element
const newDiv = document.createElement("div");

// Add text
newDiv.innerText = "New Div Created";


// ===============================
// ADDING ELEMENTS
// ===============================

// Append at end
document.body.appendChild(newDiv);

// Append multiple elements/text
document.body.append(newDiv);

// Insert before specific element
document.body.insertBefore(newDiv, heading);


// ===============================
// REMOVING ELEMENTS
// ===============================

// Remove element
newDiv.remove();

// Remove child
document.body.removeChild(newDiv);


// ===============================
// REPLACING ELEMENTS
// ===============================

// Replace old element with new one
const newHeading = document.createElement("h1");
newHeading.innerText = "New Heading";

document.body.replaceChild(newHeading, heading);


// ===============================
// NAVIGATING DOM
// ===============================

// Parent element
console.log(heading.parentElement);

// First child
console.log(document.body.firstElementChild);

// Last child
console.log(document.body.lastElementChild);

// Next sibling
console.log(heading.nextElementSibling);

// Previous sibling
console.log(heading.previousElementSibling);

// All children
console.log(document.body.children);


// ===============================
// EVENT METHODS
// ===============================

// Add event listener
heading.addEventListener("click", function () {
    console.log("Clicked");
});

// Remove event listener
function demo() {
    console.log("Hello");
}

heading.addEventListener("click", demo);
heading.removeEventListener("click", demo);


// ===============================
// FORM METHODS
// ===============================

// Get input value
const input = document.querySelector("#name");
console.log(input.value);

// Set value
input.value = "Ritwik";

// Focus input
input.focus();

// Blur input
input.blur();


// ===============================
// NODE METHODS
// ===============================

// Clone node
const copy = heading.cloneNode(true);

// Check child nodes
console.log(document.body.childNodes);

// Check if node has children
console.log(document.body.hasChildNodes());


// ===============================
// DOCUMENT METHODS
// ===============================

// Write directly to page
document.write("Hello");

// Get page title
console.log(document.title);

// Change page title
document.title = "My Website";

// Get URL
console.log(document.URL);

// Get domain
console.log(document.domain);


// ===============================
// WINDOW METHODS (Related)
// ===============================

// Alert box
alert("Hello");

// Input box
prompt("Enter Name");

// Confirmation box
confirm("Are you sure?");

// Reload page
location.reload();

// Redirect page
location.href = "https://google.com";

// Go back
history.back();

// Go forward
history.forward();





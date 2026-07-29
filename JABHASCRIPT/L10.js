// class Human {
//     // Properties

//     age;          // Public property
//     #weight = 80; // Private property
//     height = 180; // Public property

//     // Constructor: called when a new object is created
//     constructor(age, height) {
//         this.age = age;
//         this.height = height;
//     }

//     // Method: displays walking action
//     walking() {
//         console.log("Human is walking. Weight:", this.#weight);
//     }

//     // Method: displays running action
//     running() {
//         console.log("Human is running");
//     }

//     // Getter: allows reading the private weight
//     get weight() {
//         return this.#weight;
//     }

//     // Setter: allows modifying the private weight
//     set weight(value) {
//         this.#weight = value;
//     }
// }

// // Create a new Human object
// const h1 = new Human(50, 190);

// // Access public property
// console.log("Age:", h1.age);

// // Access private property through getter
// console.log("Weight:", h1.weight);

// // Call methods
// h1.walking();
// h1.running();

// // Modify private property through setter
// h1.weight = 85;

// // Verify updated weight
// console.log("Updated Weight:", h1.weight);


// default parameters 
function sayName(myName ="riti"){
    console.log("My name is " + myName);
}

sayName(); // Output: My name is riti


function solve(value = {age:21,wt:90,ht:120}){
console.log("hello", value);
}
solve();
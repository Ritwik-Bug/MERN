// =====================================================
// 1. COMPILE-TIME ERRORS (SYNTAX ERRORS)
// =====================================================

/*
Definition:
Errors detected before the program starts execution.
JavaScript cannot parse the code.

NOTE:
These errors cannot be handled using try-catch
because execution never starts.
*/


// -----------------------------------------------------
// Type 1: Missing Value Syntax Error
// -----------------------------------------------------

// let age = ;

// Error:
// SyntaxError: Unexpected token ';'


// -----------------------------------------------------
// Type 2: Missing Curly Brace
// -----------------------------------------------------

// if(true {
//     console.log("Hello");
// }

// Error:
// SyntaxError: Unexpected token '{'


// -----------------------------------------------------
// Type 3: Missing Parenthesis
// -----------------------------------------------------

// console.log("Hello";

// Error:
// SyntaxError: Missing ')' after argument list


// -----------------------------------------------------
// Type 4: Invalid Keyword Usage
// -----------------------------------------------------

// let let = 10;

// Error:
// SyntaxError: Unexpected strict mode reserved word




// =====================================================
// 2. RUN-TIME ERRORS
// =====================================================

/*
Definition:
Errors that occur while the program is executing.

These errors can be handled using try-catch.
*/


// -----------------------------------------------------
// Type 1: ReferenceError
// -----------------------------------------------------

try {

    console.log(userName);

}
catch(error) {

    console.log("ReferenceError");
    console.log(error.message);

}


// Output:
// userName is not defined



// -----------------------------------------------------
// Type 2: TypeError
// -----------------------------------------------------

try {
    // write code in which 
    // error can come

    let num = 10;

    num.toUpperCase();

}
catch(error) {
    // define error k sath aap
    // kya krna chahte h

    console.log("TypeError");
    console.log(error.message);
}


// Output:
// num.toUpperCase is not a function



// -----------------------------------------------------
// Type 3: RangeError
// -----------------------------------------------------

try {

    let arr = new Array(-1);

}
catch(error) {

    console.log("RangeError");
    console.log(error.message);

}


// Output:
// Invalid array length



// -----------------------------------------------------
// Type 4: Custom Error
// -----------------------------------------------------

try {

    let age = 16;

    if(age < 18) {

        throw new Error(
            "Age must be 18 or above"
        );

    }

}
catch(error) {

    console.log("Custom Error");
    console.log(error.message);

}


// Output:
// Age must be 18 or above



// -----------------------------------------------------
// Type 5: URIError
// -----------------------------------------------------

try {

    decodeURIComponent("%");

}
catch(error) {

    console.log("URIError");
    console.log(error.message);

}


// Output:
// URI malformed




// =====================================================
// ERROR HANDLING KEYWORDS
// =====================================================

/*

try
-----
Contains risky code.


catch
-------
Executes when an error occurs.


finally
---------
Always executes whether an error occurs or not.


throw
------
Used to manually create errors.


Error
------
Built-in object used to create custom errors.


Flow:

try
 ↓
Error?
 ↓
Yes → catch
 ↓
finally

No
 ↓
finally

*/
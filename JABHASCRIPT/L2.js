// ===============================
// OPERATORS AND CONDITIONALS
// ===============================

// ---------- VARIABLES ----------
let a = 10;
let b = 3;

// ---------- ARITHMETIC OPERATORS ----------
console.log("Arithmetic Operators:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

a++;
b--;
console.log("Incremented a:", a);
console.log("Decremented b:", b);

// ---------- ASSIGNMENT OPERATORS ----------
let x = 5;
console.log("\nAssignment Operators:");
x += 2;
console.log("x += 2:", x);
x -= 1;
console.log("x -= 1:", x);
x *= 3;
console.log("x *= 3:", x);
x /= 2;
console.log("x /= 2:", x);

// ---------- COMPARISON OPERATORS ----------
let num1 = 5;
let num2 = "5";

console.log("\nComparison Operators:");
console.log("num1 == num2:", num1 == num2);
// == checks the value
// === also checks the type
console.log("num1 === num2:", num1 === num2);
console.log("num1 != num2:", num1 != num2);
console.log("num1 !== num2:", num1 !== num2);
console.log("num1 > 3:", num1 > 3);
console.log("num1 <= 5:", num1 <= 5);

// ---------- LOGICAL OPERATORS ----------
let age = 20;
let hasVoterID = true;

console.log("\nLogical Operators:");
console.log("AND:", age >= 18 && hasVoterID);
console.log("OR:", age < 18 || hasVoterID);
console.log("NOT:", !hasVoterID);

// ---------- TYPEOF OPERATOR ----------
console.log("\nTypeof Operator:");
console.log("Type of age:", typeof age);
console.log("Type of num2:", typeof num2);


// ---------- BITWISE OPERATORS ----------
let m = 5;   // 0101
let n = 3;   // 0011

console.log("\nBitwise Operators:");
console.log("m & n:", m & n);
console.log("m | n:", m | n);
console.log("m ^ n:", m ^ n);
console.log("~m:", ~m);
console.log("m << 1:", m << 1);
console.log("m >> 1:", m >> 1);
console.log("m >>> 1:", m >>> 1);

console.log("n << 1:", n << 1);
console.log("n >> 1:", n >> 1);  
// left shift multiply by 2, right shift divide by 2


// ===============================
// CONDITIONAL STATEMENTS
// ===============================

// ---------- IF STATEMENT ----------
console.log("\nIf Statement:");
if (age >= 18) {
    console.log("Person is eligible to vote");
}

// ---------- IF ELSE ----------
console.log("\nIf Else Statement:");
let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ---------- IF ELSE IF ----------
console.log("\nIf Else If Statement:");
let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ---------- SWITCH CASE ----------
console.log("\nSwitch Statement:");
let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}

// ---------- TERNARY OPERATOR ----------
console.log("\nTernary Operator:");
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Result:", result);


// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("Gumana Ka!");


// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 2004;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job ="programmer";
// job = "teacher";
// console.log(job);

// age = 51

// let lastName = "Doe";

// console.log("=== DATA TYPES ===");

// age = 24;
// console.log(age);
// console.log(typeof age);

// let username = "Mark";
// console.log(username);
// console.log(typeof username);

// //boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// // dynamic variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


////////////////////////////////////////////////////
//Basic Operators - Math Operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10, 2** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15/3);
console.log("Exponentiation:", 2 ** 3);

// Math with strings
const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old");

////////////////////////////////////////////
//Assignment operators
console.log("=== Assignment Operators ===");
let x = 10 + 15;
console.log ("x starts as:", x);

x += 10;
console.log ("x starts as:", x);

x *= 4
console.log ("x starts as:", x);

x /= 2;
console.log ("x starts as:", x);

x++; 
console.log ("x starts as:", x);

x--;
console.log ("x starts as:", x);

///////////////////////////////////////
// Comparison operators
console.log("=== Comparison Operators ===");

console.log("Age Comparison");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number Comparison");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 16);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:" + isFullAge);

console.log("Complex comparison");
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 -5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
console.log("Test Data 1");
// 1. Calculate BMIs
console.log("Mark's BMI: ", massMark / heightMark ** 2);
console.log("John's BMI: ", massJohn / (heightJohn * heightJohn));
// 2. Create markHigherBMI variable

// 3. Log results to console
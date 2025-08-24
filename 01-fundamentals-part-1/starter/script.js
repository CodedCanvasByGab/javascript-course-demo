// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log("Gumana Ka!");


// // console.log("=== VARIABLES ===");

// // let firstName = "Jonas";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 2004;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job ="programmer";
// // job = "teacher";
// // console.log(job);

// // age = 51

// // let lastName = "Doe";

// // console.log("=== DATA TYPES ===");

// // age = 24;
// // console.log(age);
// // console.log(typeof age);

// // let username = "Mark";
// // console.log(username);
// // console.log(typeof username);

// // //boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // // dynamic variable
// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "Now I'm a string";
// // console.log(dynamicVariable, typeof dynamicVariable);

// //dynamicVariable = true;
// //console.log(dynamicVariable, typeof dynamicVariable);


// ////////////////////////////////////////////////////
// //Basic Operators - Math Operators
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas /10, 2** 3);

// // console.log("Math operations:");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15/3);
// // console.log("Exponentiation:", 2 ** 3);

// // // Math with strings
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old");

// // ////////////////////////////////////////////
// // //Assignment operators
// // console.log("=== Assignment Operators ===");
// // let x = 10 + 15;
// // console.log ("x starts as:", x);

// // x += 10;
// // console.log ("x starts as:", x);

// // x *= 4
// // console.log ("x starts as:", x);

// // x /= 2;
// // console.log ("x starts as:", x);

// // x++; 
// // console.log ("x starts as:", x);

// // x--;
// // console.log ("x starts as:", x);

// // ///////////////////////////////////////
// // // Comparison operators
// // console.log("=== Comparison Operators ===");

// // console.log("Age Comparison");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number Comparison");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 16);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:" + isFullAge);

// // console.log("Complex comparison");
// // console.log(now - 1991 > now - 2018);

// // let z, y;
// // z = y = 25 - 10 -5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // // Your code here:
// // console.log("Test Data 1");
// // // 1. Calculate BMIs
// // console.log("Mark's BMI: ", massMark / heightMark ** 2);
// // console.log("John's BMI: ", massJohn / (heightJohn * heightJohn));
// // // 2. Create markHigherBMI variable
// // const markBMI = (massMark / heightMark ** 2);
// // const johnBMI = (massJohn / (heightJohn * heightJohn));
// // console.log("Mark has a higher BMI: ",markBMI > johnBMI);
// // // 3. Log results to console

// // /////////////////
// // //Test Data 2
// // const massMark2 = 78;
// // const heightMark2 = 1.88;
// // const massJohn2 = 85;
// // const heighJohn2 = 1.76;

// // console.log("Test Data 2");

// // console.log("Mark's BMI: ", massMark2 / (heightMark2 * heightMark2));
// // console.log("John's BMI: ", massJohn2 / heighJohn2 ** 2);

// // const markBMI2 = (massMark2 / (heightMark2 * heightMark2));
// // const johnBMI2 = (massJohn2 / massJohn2 ** 2);
// // console.log("Mark has a higher BMI: ", massMark2 > massJohn2)

// ///////////////////////////////////////////////////////////////
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1981} years old`);
// console.log(`Math works; ${2 + 3} equals five1`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log(`Just a regular string`);

// ///////////////////////////////////////////////////

// const inputYear = "1991"; 
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = "1" + 1;
// console.log(n);

// n = n - 1;
// console.log(n);

// ////////////////// Equality - Strict

// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');

// console.log ('18' === 18);
// console.log('18' == 18);
// console.log(18 === 18);

// // why = can be dangerous

// console.log('0' == 0);
// console.log(0 == false);
// console.log ('0' == false);
// console.log(null == undefined);

// console.log(' ' == 0);
// console.log('  ' == 0);

// // best practice 
// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing number');
// } else if (favourite === 7) {
//   console.log('7 is a cool number');
// } else if (favourite == 9){
//   console.log('9 is a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log("Why not 23?");

//Exercise 1: Conversion Detective

console.log(5 === "5"); //false
console.log(5 == "5"); //true
console.log(true === 1); //false
console.log(true == 1); //true
console.log(false === 0); //false
console.log(false == 0); //true

//Exercise 2: Fix the Login System

// This login system has bugs - fix them!
const username = prompt("Username:");
const password = prompt("Password:");

// Fix using strict equality
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}



///////////////////////////////////////////////////////////////////

// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`); 

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Exercise 1: Club Entry System

// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP

const age = 19; // Try different values
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
if ((age >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

//Exercise 2: Weather Advisory
const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("It's a perfect day! Go out and enjoy!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("It's a good day! You can go outside, just be mindful of the wind.");
} else {
  console.log("Better stay inside today.");
}





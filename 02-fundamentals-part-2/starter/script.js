// console.log("Part 2 is now open");

// // Functions - Declarations and Expressions
// console.log(`=== FUNCTIONS ===`);

// function logger() {
//     console.log('My Name is Gab');
// }
//  logger() ;
//   logger() ;
//    logger() ;

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// console.log(juice1);

// //Function Expressions
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2004));
// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName}, ${lastName} and I'm ${age} years old`;
//     return introduction
// }

// console.log(introduce("Lhee", "Hoseña", "20"));

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} had already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "Lhee"));

// //Global Scope
// const globeVar = "I am global";

// function testScope() {
//     const localVar = "I am Local";
//     console.log(globeVar);
//     console.log(localVar);
// }

// // testScope();
// // console.log(localVar);
// // console.log(globeVar);

// // Coding Challenge #1: Function Calculator

// //Test Data 1
//  function calcAverage(score1, score2, score3){
//      const score = score1 + score2 + score3;
//      const average = score / 3;
//      return average
//  }

//  const avgDolphins = calcAverage(44, 23, 71);
//  const avgKoalas = calcAverage(65, 54, 49);

//  function checkWinner(avgDolphins, avdKoalas) {
//      if (avgDolphins >=2 * avgKoalas) {
//         return `${avgDolphins} dolphins, wins against ${avgKoalas} score of koalas`;
//      } else if (avgKoalas >=2 * avgDolphins) {
//          return `koalas' ${avgKoalas} wins against dolphin's ${avgDolphins} score`;
//      } else {
//          return `they are tied with dolphin's ${avgDolphins} matched with koala's ${avgKoalas}`;
//      }
//  }

// console.log(checkWinner(avgDolphins, avgKoalas));


// //Test Data 2
// function calcAverage(score1, score2, score3){
//     const score = score1 + score2 + score3;
//     const average = score / 3;
//     return average
// }

// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins2, avdKoalas2) {
//     if (avgDolphins2 >=2 * avgKoalas2) {
//         return `${avgDolphins2} dolphins, wins against ${avgKoalas2} score of koalas`;
//     } else if (avgKoalas >=2 * avgDolphins2) {
//         return `koalas' ${avgKoalas2} wins against dolphin's ${avgDolphins2} score`;
//     } else {
//         return `they are tied with dolphin's ${avgDolphins2} matched with koala's ${avgKoalas2}`;
//     }
// }

// console.log(checkWinner(avgDolphins2, avgKoalas2));

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;
// // ... 27 more variables?

// const grade = [85, 92, 78, 96, 88];
// console.log(grade);

// const friends = ['Girly', 'Peter', 'Mark', 'Panying'];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //array starts at counting 0
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[3]);

// console.log(friends.length);

// //change the value per index
// friends[1] = "Jay";
// console.log(friends);

// const firstName = 'Lhee';
// const Lhee = [firstName, "Hoseña", 2025 - 2004];
// console.log(Lhee);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const ages = [calcAge(2004), calcAge(2000), calcAge(1991)];
// console.log(ages);

// //Array Methods - Adding elements last on the list
// const newLength = friends.push("Peter");
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push("Vella");
// console.log(friends);
// console.log(newLength);

// //Adding first item in the list
// friends.unshift('Massimo');
// console.log(friends);

// //removing elements
// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// //find and element
// //index of method 
// console.log(friends.indexOf("Girly"));
// console.log(friends.indexOf("Gab"));

// //includes()
// console.log(friends.includes("Girly"));
// console.log(friends.includes("Peter"));

// //Array Iteration - Loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(
//     function(friends, index){
//         console.log(`Friend ${index}: ${friends}`);
//     });

// // forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades = [85, 92, 78, 60, 88, 74];
// let total = 0;

// for (let i = 0; i< grades.length; i++) {
//   total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach(
//     grade => {
//         if (grade >= 70) passedCount++;
//     }
// )

// console.log(`${passedCount} out of ${grades.length} student passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  // Your code here
  // Hint: Start with first grade, compare with each subsequent grade
  let highest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if(grades[i] > highest){
        highest = grades[i];
    }
  } return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  // Your code here
  // Hint: Similar to highest, but use < comparison
  let lowest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowest) {
        lowest = grades[i]
    }    
  } return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  // Your code here
  // Hint: Counter pattern - increment when condition is met
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
        count++;
    }    
  } return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);


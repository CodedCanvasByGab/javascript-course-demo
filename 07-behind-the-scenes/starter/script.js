'use strict';

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outerHeight, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope;

// const name = 'GlobalName';

// function a() {
//   const name = 'FunctionName';
//   function b() {
//     console.log(name);
//   }
//   b();
// }

// a();

// console.log(varX);
// console.log(letX);
// console.log(constX);

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet();
// person.name = 'Lhee';
// person.greet();

// const anotherPerson = {
//   name: 'Sarah',
// };

// anotherPerson.greet = person.greet;

// anotherPerson.greet();

// //detach Function
// const greetFunction = person.greet;
// greetFunction();

// const obj = {
//   name: 'object',
//   regularMethod: function () {
//     console.log('Regular', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?

//Old Approach

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   //ArrowFunction
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     });
//   },
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// user.printHobbiesBad(); // Fails - this.name is undefined
// user.printHobbiesGood(); // Works - shows all hobbies

// Arguments

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguements length', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg', args[0]);
//   },
// };

// functionTypes.regularFunction('Hello', 'world');
// // functionTypes.arrowFunction('Test');
// functionTypes.modernFunction('modern', 'approach');

// // Primitive
// let age = 30;

// //we copy the p[rimitive, makingf independent copy
// let oldAge = age;

// age = 31;

// console.log('oldAge:', oldAge);

// //Object Heap
// const me = { name: 'Jonas', age: 30 };

// const friend = me;

// friend.age = 27;

// console.log('me', me);
// console.log('friend', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('Same Object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'codings'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';

console.log('original name:', originalPerson);
console.log('Shallow Name:', shallowCopy);

shallowCopy.hobbies.push('gaming');

console.log('original hobbies:', original.hobbies);
console.log('Shallow Hobbies:', shallowCopy.hobbies);

///Deep Copy
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', countryu: 'France' },
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('original adress', deepOriginal.address);
console.log('Copy Address:', deepCopy.address);

console.log('original hobby', deepOriginal.hobbies);
console.log('Copy hobby:', deepCopy.hobbies);

console.log('original Name:', deepOriginal.name);
console.log('Copy Name:', deepCopy.name);

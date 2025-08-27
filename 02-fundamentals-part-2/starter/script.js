console.log("Part 2 is now open");

// Functions - Declarations and Expressions
console.log(`=== FUNCTIONS ===`);

function logger() {
    console.log('My Name is Gab');
}
 logger() ;
  logger() ;
   logger() ;

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 3));

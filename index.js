// The require method only works in Node.JS or when using Browserify for the browser
const C = require('./calculator.js');

var num1 = 10;
var num2 = 20;

var plusTen = C.makeAdder(10);
var timesTwo = C.makeMultiplier(2);
var timesFive = C.makeMultiplier(5);

// The ` below is called a 'backtick' and it is left of the number 1 on your
// keyboard. It is like using quotes for strings...but better. This syntax
// only works when using Node.JS or when using Babel to compile it into older
// syntax that works with browsers.
console.log(`3 plus 10 is ${plusTen(3)}`);
console.log(`10 times 2 is ${timesTwo(10)}`);
console.log(`7 times 5 is ${timesFive(7)}`);
console.log(`20 times 2 is ${timesTwo(20)}`);


var numbers = C.createArray(1, 8, 3); // (startingNum, numberOfValues, interval)
console.log(`\nArray: ${numbers}`);
console.log(`Sum: ${C.arraySum(numbers)}`);
console.log(`Array Length: ${numbers.length}`);
var arrayAverage = C.arraySum(numbers) / numbers.length;
console.log(`Average: ${arrayAverage.toFixed(1)}`);

// This file is called a 'module'. It has code that can be used in many different files
function makeMultiplier(num) {
    var multiplier = num;

    function foo(numberToMultiply) {
        return multiplier * numberToMultiply;
    }

    return foo;
}

function makeFunctionThatAddsAConstantNumber(adder) {

    // The foo from above is not editable nor accessible from outside of the
    // makeMultiplier function...but it does save its environment when it is called,
    // such as the multiplier variable and the num parameter. So the foo from
    // above does not affect the foo below, and vice versa
    function foo(numberToAdd) {
        // We can save the parameter adder, when foo is called
        return adder + numberToAdd;
    }

    return foo;
}

function createArray(startingNum, numberOfValues, interval) {

    var result = [startingNum];
    var interval = interval || 1; // if interval is null, assign 1

    for(var i = startingNum; i < (startingNum + ((numberOfValues - 1) * interval)); i += interval) {
        result.push(i + interval);
    }

    return result;
}

function sumOfAllArrayValues(arrayOfNums) {

    // "Functional programming" uses the reduce method very often
    var result = arrayOfNums.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);
    return result;
}

// The code below allows other files to use the functions above. The 'require' method
// allows other files to use the functions from this file
module.exports.makeMultiplier = makeMultiplier;
module.exports.makeAdder = makeFunctionThatAddsAConstantNumber;
module.exports.arraySum = sumOfAllArrayValues;
module.exports.createArray = createArray;

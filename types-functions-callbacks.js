
// Example

// The purpose of this first exercise is just to show how
// assertions work and how the homework should be carried out.
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one.
function addOne(num) {
	return num + 1;
}



console.assert(addOne(1) === 2)
console.assert(addOne(1) === 2)



// Part 0

// Fix the following code so that the assertion passes.

var doubleNum = function(num) {
	var newNum = ((num) * 2);
	return newNum;
}

console.assert(doubleNum(5) === 10)
console.assert(doubleNum(5)===10)



/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

 function sum(a,b){
 	return (a + b);
 }


console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);



// PART 2


// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside
// of your average function.

function average(a,b){
	return ((a + b) / 2);
}

console.assert(average(8,12) === 10)
console.assert(average(100,200) === 150)

/**
 * PART 3
 *
 * Modify your sum function so that if either of its
 inputs is not a number, it will return "null."
 */

 function sum(a,b){
  return (a + b);
	if (typeof a !== "number" || typeof b !== "number"){
		return null;
	}
	else{
		return(a + b);
	}
 }

console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);


// Part 4

// Write a function called isNegative that will tell
// whether a number is negative or not.
function isNegative(number){
	if (number < 0){
		return true
  }else{

	 return false
 }
}


console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)


// Now, modify your sum function again, so that it
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative
// function inside your sum funciton ***

var sum = function(N1, N2) {
	if(isNegative(N1) === true || isNegative(N2) === true ){
		return null
  }else{
	  return (N1 + N2)
	}
}
// console.log('5+5', 5 + 5)
console.assert(sum(5,-5) === null)

// Part 5

// Write a function that will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).


var minimum = function(num1, num2, num3, num4){

	if(Math.min(num1, num2, num3) < Math.min(num2, num3, num4)){
	return Math.min(num1, num2, num3, num4)
		}else{
			return Math.min(num1, num2, num3, num4)
		}
}

console.assert(minimum(1,2,4,0) === 0);
console.assert(minimum(1000,-2,-99,50) === -99);
console.assert(minimum(-1000,-2,-99,50) === -1000);
console.assert(minimum(1000,-2,99,50) === -2);



// Part 7

// Using logical operators, write a function that will
// return true if either input is a string, but not
// both or neither.
var justOneString = function(num1,num2){
	if (typeof num1 === 'string' && typeof num2 === 'number' || typeof num1 ==='number' && typeof num2 === 'string'){
		return true
	} else {
		return false
	}
}
console.log('a',5)

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,null) === false)


// Part 8

// Write a function called doTwice that takes as input a
// function and invokes that function twice.

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function(){
	NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
	NUMBER = NUMBER * 2
}
var doTwice = function(num){
					num()
					num()
					return NUMBER
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)

// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if
// the value of a certain global variable, called ORACLE, is
// "YES." Otherwise, it will does nothing.

var ORACLE = 'NO'

var conditionallyInvoke = function (arg){
	if(ORACLE = 'YES'){
		arg()
	}

}
console.assert(NUMBER === 48)

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 96)

// Part 10

// Make the following assertion work:

console.assert(factory()() === 'hello world')  // INCEPTION!


// Part 11

// Want more?

console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 12

// This can't be healthy...

console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)

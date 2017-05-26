// All about arrays! [Okay, maybe that's an overpromise]

// How do I create an array?
// Empty?
const empty = [];
// Numbers?
const numbers = [1, 2, 3];
// Strings
const strings = ['a', 'b', 'c'];
// Objects?
const objects = [{}, {}, {}];
// Array of arrays?
const arrays = [[], [], []];
// The above are eamples of creating arrays using the array literal syntax

// How many elements(things) are in the array?
const emptyLength = empty.length;
console.log(emptyLength);
const numbersLength = numbers.length;
console.log('Numbers Length: ', numbersLength);

// How can I access an element of an array?
const firstString = strings[0];
console.log('First String from Strings Array: ', firstString);
const thirdObject = objects[2];
console.log('The Third object: ', thirdObject);
console.log('Use an index that is greater than the length: ', objects[3]);
// answer: undefined

// How can I change an element of an array?
numbers[2] = 4;
console.log('Numbers after changing 3 to 4: ', numbers);

// How can I add elements to the right hand side of an array?
console.log('strings before the push: ', strings);
strings.push('f');
console.log('strings after the push: ', strings);

// How can I combine two arrays?
const combined = numbers.concat(strings);
console.log('combined array of numbers and strings: ', combined);
// If I were to write strings.concat(numbers);, then the order of the result in
    // console.log would be different

// How can I find the position of an element in the array?
// WARNING: numbers and strings work like I think they should. Objects and
      // arrays can do weird things.

const positionOfB = strings.indexOf('b');
console.log('Position of b: ', positionOfB);
const positionOfK = strings.indexOf('k');
console.log('Position of k: ', positionOfK);
// WARNING: if the element appears more than once, you will only get the
// first index, not all.

//What if I want a piece of an array?
const lastTwoNumbers = numbers.slice(numbers.length-2);
console.log('The last two numbers of numbers: ', lastTwoNumbers);

// forEach - I want to iterate through an array
const resultOfForEach = numbers.forEach(function logger(number, index){
  console.log('Numbers: ', number, index);
});
console.log('results of forEach: ', resultOfForEach);
//this will be my first inline named function. forEach does not return stuff

// forEach CHALLENGE
const x = [4, 5, 6, 7, 8, 9];
// write a foreach statement that prints out each of the elements and
// its position for the array x
const resultsOfForEachChallenge = x.forEach(function logging(x, index){
  console.log('Number in X and its index: ', x, index);
})

// map - I want to get a new array with changes to each element of the orig
const stringLength = strings.map(function lengthGetter(string, index){
  return string.length;  //return means spit out
});
console.log('String lengths: ', stringLength);

// MAP CHALLENGE
const y = ['I', 'Like', 'Cheese', '?'];
const yLengths = y.map(function lengthGetter(string, index){
  return string.length;
  //string is named here because that's the data type in y
});
console.log('ylengths: ', yLengths);

// filter - I want only certain elements of an array that pass a test
const lengthOfOneStrings = y.filter(function test(string, index){
  return string.length === 1;
});
console.log('Length of One Strings: ', lengthOfOneStrings);

//FILTER CHALLENGE
const stringsWithLengthBiggerThanOne = y.filter(function test(string, index){
  return string.length > 1;
})
console.log('Strings with length more than one: ', stringsWithLengthBiggerThanOne);

// reduce - I want to take an array to something simpler
const sumOfNumbers = numbers.reduce(function adder(acc, next){
console.log('acc: ', acc, 'next: ', next);
  return acc + next;
}, 0);
console.log('Sum of Numbers: ', sumOfNumbers);

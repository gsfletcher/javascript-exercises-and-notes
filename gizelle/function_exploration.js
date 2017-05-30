/*jshint esversion: 6 */
// Let's talk about functions

// SO, what are functions?
// It is a way of bundling a piece of repetitive code into a reusable chunk

// Named function declations - available anywhere in this file
function launchTheMissiles(){
  console.log('Launching the missiles');
}
// Our first function
function square(num){
  // launchTheMissiles(); -- this is bad!
  return num * num;
}

const squareOfTwo = square(2);
// console.log(num); // "num" doesn't exist outside the function
                  // variables are encased in functions
console.log('Square of Two:', squareOfTwo);





// console.log('Cube of 2 before; ', cube(2)); // BROKE. variable not defined here
// assign functions to variables
const cube = function cube(num){
  return num * num * num;
};
//below is equivalent to above

// const cubeFatArrow = (num) => {
//   return num * num * num;
// };          // ALTERNATIVELY:
const cubeFatArrow = (num) => num * num * num;

console.log('Cube of 2 after: ', cube(2));
console.log('cubeFatArrow of 2: ', cubeFatArrow(2));

// this is all about strings
const aString = "the quick brown fox jumped over the moon";

// What is the length of the string?
const stringLength = aString.length; //this is property access
console.log('String Length: ', stringLength);

// What is the first character in the string?
const firstChar = aString.charAt(0); //this is a method call
console.log('the first letter: ', firstChar);

// What is another way to find the first in the string?
const firstCharAnotherWay = aString[0];
console.log('The first letter another way: ', firstCharAnotherWay);

// What is the seventh letter of the string?
const seventhChar = aString [6]; //know that you can use charAt
console.log('the seventh letter: ', seventhChar);

// how do i put strings together? (concatenation)
const stringsTogether = aString.concat("!");
const stringTogetherAgain = aString + "!";
// these accomplish the exact same thing
console.log('string together: ', stringsTogether);
console.log('string together again: ', stringTogetherAgain);
console.log('aString: ', aString);

// FACT!!:String are immutable. You can get new ones, but you can't modify
              // existing ones.

// I want part of a string. How do I do that?
const firstFiveChar = aString.slice(0, 5); //end index is not included
console.log('The first five characters: ', firstFiveChar);

// How do I split a sentence into the words?
const words = aString.split(' ');
console.log('Words: ', words);


// 1. What are the number of words in the string?
const numberOfWords = aString.split(' ').length;
console.log('Number of Words: ', numberOfWords);

// 2. How many spaces are in the string?
const numberOfSpaces = numberOfWords - 1;
console.log('number of spaces: ', numberOfSpaces);

// 3. What is the longest word in the string?
const startingWord = aString.split(' ');
const lengthOfWords = startingWords.map(word => word.length);
const maximumWordLength = max(lengthOfWords);
function max(listOfNums) {
  let maximum = listOfNumber[0];
  for (let num in listOfNumbers){
    if (num > maximum){
      maximum = num;
    }
  }
  return maximum
}

// 4. How do I reverse a string?
// not a space in a the split. NOT A SPACE. IT IS AN EMPTY STRING
const reverseString = aString.split("").reverse().join("");
console.log('Reversed String: ', reverseString);

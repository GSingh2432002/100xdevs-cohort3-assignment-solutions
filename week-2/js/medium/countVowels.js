/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let numberOfVowels = 0;
    const VowelString = "AEIOUaeiou";

    for(let i=0; i<str.length; i++) {
      if(constVowelString.includes(str[i])) numberOfVowels++;
    }

    return numberOfVowels;
}

module.exports = countVowels;

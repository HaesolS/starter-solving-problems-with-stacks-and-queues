const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  // make all characters lowercase and remove all spaces and punctuation from sentence
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // declare variable 'middle' and initialize it to half the length of the sentence
  // rounding down to an integer value for odd-length strings
  let middle = Math.floor(sentence.length / 2);
  // initialize a new stack
  const stack = new Stack();
  // iteriate through the sentence from first char up to middle
  for (let index = 0; index < middle; index++) {
    // push each char onto the stack
    stack.push(sentence[index]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  // iteriate from middle to the end of the sentence
  // if the sentence is an odd length...
    // then iterate from middle+1 to skip the middle char of the sentence
  for (let index = middle, limit = sentence.length; index < limit; index++) {
    // on each iteration, pop a char from the stack and compare it to the current char
    if (sentence[index] !== stack.pop()) {
      // if they don't match, return false
      return false;
    }
  }
  // when the loop is done, return true
  return true;
};

module.exports = isPalindrome;

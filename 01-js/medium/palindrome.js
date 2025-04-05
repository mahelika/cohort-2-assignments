/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  let cleaned = '';

  for (let char of lowerStr) {
    const isAlphaNumeric = (char >= 'a' && char <='z') || (char >= '0' && char <= '9');

    if(isAlphaNumeric){
      cleaned += char;
    }
  }

  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

module.exports = isPalindrome;

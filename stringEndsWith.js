/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//Answer
function solution(str, ending) {
  let reverseStr = str.split("").reverse().join("");
  let reverseEnding = ending.split("").reverse().join("");
  return reverseStr.substring(0, ending.length) === reverseEnding;
}

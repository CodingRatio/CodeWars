/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

//Answer
function count(string) {
  let obj = {};
  string.split("").forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
  return obj;
}

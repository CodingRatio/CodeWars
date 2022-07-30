/*
Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, 
so the function should return 5 in this case
*/

//Answer
var countBits = function (n) {
  let binary = [];
  while (n > 0) {
    binary.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  return binary.reduce((acc, el) => acc + el, 0);
};

/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

348597 => [7,9,5,8,4,3]
0 => [0]

*/

//Answer
function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => parseInt(str));
}

//Numerical operation only
/*
function digitize(n) {
  let numArr = [];

  if (n === 0) {
    retunr[0];
  }

  while (n > 0) {
    numArr.push(n % 10);

    n = Math.floor(n / 10);
  }

  return numArr;
}
*/

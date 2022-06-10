/*Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
You can assume that all values are integers. Do not mutate the input array/list.*/

//Answer//
function invert(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(-array[i]);
  }
  return newArray;
}

//ES6//
function invert(array) {
  return array.map((num) => (num === 0 ? num : -num));
}

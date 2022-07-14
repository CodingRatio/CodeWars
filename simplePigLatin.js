/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//Answer
function pigIt(str) {
  return str
    .split(" ")
    .map((element) => {
      //because punctuation should be unaffected and I am not permitted to use regex
      //I can acquire the required characters by using their charcode and retrieving only characters from a to z.
      let lowerCaseElement = element.toLowerCase();
      return lowerCaseElement.charCodeAt(0) > 95 &&
        lowerCaseElement.charCodeAt(0) < 123
        ? element.substring(1, element.length) + element[0] + "ay"
        : element;
    })
    .join(" ");
}

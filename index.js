function reverseString(word) {
  reversed = '';
  for (let j = word.length -1; 0 <= j; j--){
    reversed += word[j];
  }
  return reversed;
}
function isPalindrome(word) {
  // Write your algorithm here
  return reverseString(word) == word;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

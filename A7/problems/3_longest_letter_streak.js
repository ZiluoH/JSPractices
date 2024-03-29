/*******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

Examples:

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*******************************************************************************/

function longestLetterStreak(str, searchLetters) {
  // your code here...
  var longest = 0;
  var current = 0;
  for (var i = 0; i < str.length; i++){
    var char = str[i];
    if (current === 0 && searchLetters.indexOf(char) !== -1){
      current = 1;
    } else if (current > 0 && searchLetters.indexOf(char) !== -1){
      current++;
    } else if (current > 0 && searchLetters.indexOf(char) === -1){
      current = 0;
    }

    if (current > longest){
      longest = current;
    }
  }
  return longest;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestLetterStreak;

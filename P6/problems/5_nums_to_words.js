/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

var numObj = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six', 
  7: 'Seven', 
  8: 'Eight', 
  9: 'Nine'
}

function numsToWords(numString) {
  // your code here...
  var str = '';
  for (var i = 0; i < numString.length; i++){
    var num = numString[i];
    str += numObj[num];
  }
  return str;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;

/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
  // your code here...
  var vowel = 'aeiouAEIOU';
  for (var i = word.length - 1; i >= 0; i--){
    if(vowel.indexOf(word[i]) > -1){ //is vowel
      var before = word.slice(0, i);
      var after = word.slice(i + 1);
      return (before + after);
    }
  }
 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;

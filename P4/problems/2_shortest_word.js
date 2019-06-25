/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  // your code here...
  var words = sentence.split(' ');
  var shortestWord = words[0];
  for (var i = 0; i < words.length; i++){
    if(shortestWord.length > words[i].length){
      shortestWord = words[i];
    }
  }
  return shortestWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;

/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function removeLastVoewl(word) {
  var vowels = 'aeiouAEIOU';
  for (var i = word.length -1; i >= 0; i--) {
    if(vowels.indexOf(word[i]) > -1){  //this is vowel
      var before = word.slice(0, i);
      var after = word.slice(i + 1);
      var newWord = before + after;
      return newWord;
    }
  }
  return word;
}


function hipsterfy(sentence) {
  // your code here...
  var arr = [];
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    arr.push(removeLastVoewl(word));
  }
  return arr.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;

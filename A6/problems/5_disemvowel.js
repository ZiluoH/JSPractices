/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/
function isVowel(char){
  var vowels = 'aeiouAEIOU';
  if (vowels.indexOf(char) >= 0){
    return true;
  } else {
    return false;
  }
}


function disemvowel(string) {
  // your code here...
  var str = '';
  for(var i = 0; i < string.length; i++){
    var char = string[i];
    if(isVowel(char) === false){
      str = str + char;
    }
  }
  return str;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;

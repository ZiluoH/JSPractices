/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/
// I tried the code below, the output looks correct, but somehow did not pass, so I used the other way to solve the problem. 
// function royalWe(sentence) {
//   var words = sentence.split(' ');
//   var newWords = [];
//   for(var i = 0; i < sentence.length; i++){
//     var word = words[i];
//     if (word === 'I') {
//       newWords.push('we');
//     } else if (word === 'my') {
//       newWords.push('our');
//     } else if (word === 'me') {
//       newWords.push('us');
//     } else if (word === 'mine') {
//       newWords.push('ours');
//     } else {
//       newWords.push(words[i]);
//     }
//   }
//   return newWords.join(' ');
// }

function royalWe(sentence) {
  var words = sentence.split(' ');
  for(var i = 0; i < sentence.length; i++){
    if (words[i] === 'I') {
      words[i] = 'we';
    } else if (words[i] === 'my') {
      words[i] = 'our';
    } else if (words[i] === 'me') {
      words[i] = 'us';
    } else if (words[i] === 'mine') {
      words[i] = 'ours';
    } 
  }
  return words.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;

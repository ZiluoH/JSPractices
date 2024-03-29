/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  // your code here...
  var bestWin = 0;
  var currentWin = 0;
  for (var i = 0; i < str.length; i++){
    if (currentWin === 0 && str[i] === 'W'){
      currentWin = 1;
      if (currentWin > bestWin) {
        bestWin = 1;
      }
    } else if (currentWin > 0 && str[i] === 'W'){
      currentWin++;
      if (currentWin > bestWin) {
        bestWin = currentWin;
      }
    } else if (str[i] === 'L'){
      currentWin = 0; 
    }
  }
  return bestWin;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;

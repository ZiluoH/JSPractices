bestWinStreak('WWLWWWLWW')

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
  console.log(bestWin);
}



function pyramidScheme(base) {
  var pyramid = [];
  pyramid.push(base);
  var newBase = [];
  for (var i = base.length; i > 1; i--){
    
    for (var j = 0; j < base.length - 1; j++){
      newBase.push(base[j] + base[j + 1]);
    }
    pyramid.unshift(newBase);
    base = newBase;
    newBase = [];
  }

  console.log(pyramid);
}


var p1 = pyramidScheme([2, 3, 7, 5, 9]);
p1 // =>
//  [
//    [ 85 ],
//    [ 37, 48 ],
//    [ 15, 22, 26 ],
//    [ 5, 10, 12, 14 ],
//    [ 2, 3, 7, 5, 9 ]
//  ]
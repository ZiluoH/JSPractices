function isPrime(num){
  if (num < 2){
    return false;
  }
  
  for (var i = 2; i < num; i ++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

function beforePrime(num){
  if (num === 2){
    return null;
  } else {
    for (var i = num -1; true ; i--){
      if (isPrime(i)){
        return i;
      }
    }
  }
}

function previousPrimeArray(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++){
    var num = array[i];
    if (isPrime(num) === false){
      arr.push(num);
    } else {
      arr.push(beforePrime(num));
    }
  }
  console.log(arr);
}


previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
previousPrimeArray([1, 2, 3, 4, 5]); // [ 1, null, 2, 4, 3 ]
console.log(isPrime(1))
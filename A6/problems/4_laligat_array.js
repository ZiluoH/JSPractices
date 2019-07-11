/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/
function isPrime(num){
  if(num === 2){
    return true;
  } else {
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }
}


function laligatArray(array) {
  // your code here...
  var arr = [];
  for(var i = 0; i < array.length; i++){
    var max = array[i];
    var sum = 0;
    for(var j = 2; j <= max; j++){
      if(isPrime(j)){
        sum += j;
      }
    }
    arr.push(sum);
  }
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;

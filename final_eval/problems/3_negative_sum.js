/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/

function negativeSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    var num = arr[i];
    if (num < 0){
      sum += num;
    }
  }
  return sum;
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = negativeSum;

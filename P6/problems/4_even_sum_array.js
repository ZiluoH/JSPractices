/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSumArray(array) {
  // your code here...
  var arr = [];
  for(var i = 0; i < array.length; i++){
    var max = array[i];
    var sum = 0;
    for(var j = 0; j <= max; j += 2){
      sum += j;
    }
    arr.push(sum);
  }
  return arr;
}





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;

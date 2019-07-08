/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  var name = students[0].name.split(' ');
  var id = students[0].id;
  var score = students[0].score
  
  for (var i = 0; i < students.length; i++){
    if(students[i].score > score){
      score = students[i].score;
      name = students[i].name.split(' ');
      id = students[i].id;
    }
  }
  var initials = name[0][0] + name[1][0] + id
  return initials;

}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;

var fs = require('fs');
var numberArray = undefined;
var numTotal = 0;
var average = 0;

function done(average, numberArray) {
  var highest = numberArray[numberArray.length - 1];
  var lowest = numberArray[0];
  console.log("The highest number is: " + highest + ", the lowest number is: " + lowest + ", and the average is: " + average + ". We're done.");
}


function bigFile(callback){
  fs.readFile('numbers.txt', 'utf-8', callback);
  }
function fileSplit(err, fileContents) {
  numberArray = fileContents.split(", ");
  numberArray.sort(function(a, b){
    return a-b;
  })
  for (var i = 0; i < numberArray.length; i++) {
    numTotal += parseInt(numberArray[i]);
  }
  average = Math.round(numTotal/(numberArray.length));
  done(average, numberArray)
}

bigFile(fileSplit);

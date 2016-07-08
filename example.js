var numberArray = [1, 3, 5, 9, 4, 45, 5];
var numTotal = 0;
var average = 0;

function done(average, numberArray) {
  var highest = numberArray[numberArray.length - 1];
  var lowest = numberArray[0];
  console.log("The highest number is: " + highest + ",\n the lowest number is: " + lowest + ",\n and the average is: " + average + ".");
};

function fileSplit(numberArray) {
  // numberArray = fileContents.split(", ");
  numberArray.sort(function(a, b){
    return a-b;
  });
  for (var i = 0; i < numberArray.length; i++) {
    numTotal += numberArray[i];
  };
  average = Math.round(numTotal/(numberArray.length))
  done(average, numberArray);
};
fileSplit(numberArray);

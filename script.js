function arrSorter(numArr) {
  var sortedArr = numArr.sort(valueSort);
  return sortedArr;
};

function valueSort(a, b) {
  return a - b;
}

function greaterQuarter(numArr) {
  var greaterArr = [];
  for(var i=0; i<numArr.length; i++) {
    if(numArr[i] > 25) {
      greaterArr[greaterArr.length] = numArr[i];
    }
  }
  return greaterArr;
};

function renderOutput(numArr) {
  var outputString = "";
  for(var i=0; i<numArr.length; i++) {
    outputString += "<div class='number'>" + numArr[i] + "</div>";
  }
  $("#content").append(outputString);
};

$("#sort").click(function(e) {
  e.preventDefault();
  var userInput = $("#csv").val().split(",");
  renderOutput(greaterQuarter(arrSorter(userInput)))
});
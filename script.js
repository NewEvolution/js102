function arrSorter(numArr) {
  var sortedArr = numArr.sort();
  return sortedArr;
};

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
};

$("#sort").click(function(e) {
  e.preventDefault;
  var userInput = $("#csv").value.split(",");
  renderOutput(greaterQuarter(arrSorter(userInput)))
});
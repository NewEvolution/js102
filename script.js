function greaterQuarter(numArr) {
  var greaterArr = [];
  for(var i=0; i<numArr.length; i++) {
    if(numArr[i] > 25) {
      greaterArr[greaterArr.length] = numArr[i];
    }
  }
  return greaterArr;
};

function arrSorter(numArr) {
  var sortedArr = numArr.sort();
  return sortedArr;
};

$("#sort").click(function(e) {
  e.preventDefault;
  var userInput = $("#csv").value.split(",");
  
});
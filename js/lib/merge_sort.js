var bubbleSort = require('./bubble_sort');

function split( arr ){
  var split= [];
  var megaArr = [];
  for (var i = 0; i < arr.length; i++) {
    split = arr.slice(i,i+1);
    megaArr.push(split);
  }
  return megaArr;
}

function mergeSort(arr) {
  var concatArr = [];
  var totallySplittedDude = split(arr);
  do {
    for (var i = 0; i < totallySplittedDude.length; i+=2) {
      if(totallySplittedDude[i+1] === undefined) {
        concatArr.push(totallySplittedDude[i]);
      } else {
        concatArr.push(bubbleSort(totallySplittedDude[i].concat(totallySplittedDude[i+1])));
      }
    }
    totallySplittedDude = concatArr;
    concatArr = [];
  } while (totallySplittedDude.length > 1);
  return totallySplittedDude[0];
}

console.log(mergeSort([2,6,3,8,4,9,1,5,13,7,0,10,30]));

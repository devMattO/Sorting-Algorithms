
var quickSort = function( arr ){
  var pivot = [];
  var counter;
  var partitionL;
  var partitionR;
  if(arr.length <= 1){
    return arr;
  }
  pivot.push(arr.pop());
  partitionL = arr.filter( function( element ) {
    return element <= pivot;
  });
  partitionR = arr.filter( function( element ) {
    return element > pivot;
  });
  var answer = quickSort(partitionL).concat(pivot, quickSort(partitionR));
  return answer;
};
var someArr = [3,7,1,0,300,9,5,8,6,4,7,10,0,8,9,2,29,5,0,7,3,2];
console.log(quickSort(someArr));

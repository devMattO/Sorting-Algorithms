function selectionSort( arr ) {
  for(var i = 0; i < arr.length; i++){
  var lowestNum = arr[i];
  var lowestNumIndex = i;
    for( var j = i + 1; j < arr.length; j++){
      if( arr[j] < lowestNum ){
        lowestNum = arr[j];
        lowestNumIndex = j;
      }
    }

    var tempVar = arr[i];
    arr[i] = arr[lowestNumIndex];
    arr[lowestNumIndex] = tempVar;

    console.log(arr); //shows process
  }
  return arr;
}

console.log(selectionSort([9,8,7,6,5,4,3,2,1]));

module.exports = selectionSort;
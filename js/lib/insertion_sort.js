function insertionSort( arr ) {
  var el;
  for ( var i = 1; i < arr.length; i++ ) {
    if( arr[ i ] < arr[ i - 1 ] ) {
      for ( var j = i; j >= 0; j-- ) {
        if( arr[ j ] < arr[ j - 1 ] ) {
          el = arr[ j ];
          arr.splice( j, 1 );
          arr.splice( j - 1, 0, el );
        }
      }
    }
  }
  return arr;
}
console.log( insertionSort( [ 5, 2, 6, 9, 3, 1, 0, 7, 4 ] ) );
function split( arr ){
  var split= [];
  var megaArr = [];
  for (var i = 0; i < arr.length; i++) {
    split = arr.slice(i,i+1);
    megaArr.push(split);
  }
  return megaArr;
}

function mergeSort( arr ){
  var splitArr = split( arr );
  var splittah;
  var biggahArr = [];
  for (var i = 0; i < splitArr.length; i++) {
    splittah = splitArr.splice(0,2);
    console.log(splittah, 'splittah');
    biggahArr.push(splittah);
  }
    console.log(biggahArr);
}
mergeSort([2,6,3,8,4,9,1,5,13,7,0,10,30]);


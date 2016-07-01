'use strict';

var currentNum;
var nextNum;

var bubbleSort = function( input ){
  var flag = true;
  var counter = 0;
  while(flag){
    flag = false;
    for (var i = 0; i < input.length; i++) {
      currentNum = input[i];
      nextNum = input[i + 1];
      if( nextNum < currentNum ){
        input.splice(i, 2, nextNum, currentNum);
        flag = true;
      }
    }
  }
  return input;
};

module.exports = bubbleSort;
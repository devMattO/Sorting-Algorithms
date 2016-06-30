describe('Quick Sort Alg', function(){

  it('should be a function', function(){
    expect(quickSort).to.be.a('function');
  });

  it('should take an input Array and return sorted array', function(){
    var arr = [7,2,8,88,49,29,5,4,9,6,3,1];
    expect(quickSort(arr)).to.deep.equal([1,2,3,4,5,6,7,8,9,29,49,88]);
  });

});
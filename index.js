function sortedSquaredArray(array) {
  square = []
  // Write your code here.
  for(pos of array) {
    p = Math.sign(pos)
    if(p === -1){
      return console.log([])
    }
  }

  array.sort((a, b) => a - b)
  for(arr of array) {
    square.push(Math.pow(arr, 2)) 
  }
  return console.log(square);
}

sortedSquaredArray([2,8,5,7,1,3])
// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
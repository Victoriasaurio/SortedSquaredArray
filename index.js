function sortedSquaredArray(array) {
  absoluto = []
  square = []
  // Write your code here.
  array.map((num) => absoluto.push(Math.abs(num)))
  absoluto.sort((a, b) => a - b)
  for(arr of absoluto) {
    square.push(Math.pow(arr, 2)) 
  }
  return console.log(square);
}

sortedSquaredArray([2,8,5,-7,1,3,9,6,-4])
// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
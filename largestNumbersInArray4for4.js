//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  //Create empty array for largest numbers
  var largestArray = [];
  //Find largest number in each sub-array
  for (var i = 0; i < arr.length; i++) {
    var max=0;
    for (var j=0; j<arr[i].length; j++){
      if (arr[i][j]>max){
        max=arr[i][j];
      }
    }
    largestArray.push(max);
  }
  console.log(largestArray);
}
largestOfFour([[23,2,54,12], [0,21,8,33], [11,8,43,20], [90,5,3,27]]);

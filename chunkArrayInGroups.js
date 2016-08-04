//Write a function that splits an array into groups the length of size and returns them as a two-demensional array
function chunkArrayInGroup(arr, size){
  var newArr=[];
  while (arr.length>0){
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
console.log (chunkArrayInGroup(['a', 'b', 'c', 'd'], 2));

//Return the remaining elements of an array after chopping off n elements from the head
function slasher(arr, howMany){
return arr.slice(howMany);
}
console.log(slasher([1,2,3,4,5], 2));

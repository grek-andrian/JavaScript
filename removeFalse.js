//Remove all falsy values from an array
function removeFalse(arr){

return arr.filter( function(value){
return value ? true : false;
});
}
console.log(removeFalse([7, "ate", "", false, 9, 0]));

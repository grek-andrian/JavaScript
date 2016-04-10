 var arr=[10,20,21,34,45,36,19,17,15,14];
function evenArray(array){
  var earr=[];
  for (x in array) {
    if ((array[x]%2)!=0)
    earr.push(array[x]);
  }
  return earr;
}
console.log (evenArray(arr));

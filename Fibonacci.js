function fiboElement(n){
var a=0, b=1, result=b;
for (var i=1; i<n; i++){
    result=a+b;
  a=b;
  b=result;
  console.log(result);
}
}

var y=fiboElement(11);
console.log (y);

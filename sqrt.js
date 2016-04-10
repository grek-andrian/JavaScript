function sqrt(A) {
  var x=A;
  var error=Math.pow(10,-6);
  while ((x - A/x) > error){
    x = 0.5 * (x + A/x);
  }
  return x;
}
var result=sqrt(9);
console.log("result =" + result);

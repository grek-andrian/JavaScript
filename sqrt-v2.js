function sqrt (num){
  var x=num;
  while (Math.abs(x*x-num)>0.001){
    x=(x*x+num)/(2*x);
  }
  return x;
}
console.log(sqrt(16));

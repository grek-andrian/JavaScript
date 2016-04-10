//function pow (base, exponent){
//  if (exponent === 0)
//   {return 1;}
//  else return base * pow (base, exponent-1);
//}
function pow (base, exp){
  var result=1;
  while (exp--){
    result = result * base;
  }
  return result;
}
console.log (pow(2,0));

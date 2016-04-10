//function fact (num){
  //if (num === 0)
   //{return 1;}
  //else {return num * fact (num-1);}
//}

function fact (n){
  j=1;
  for (i=2; i<=n; i++){
    j=j*i;}
    return j;
}
console.log (fact(2));

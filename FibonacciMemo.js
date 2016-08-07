var fibonacci= (function(){
var memo=[0, 1];
var fib = function (n){
var result = nemo[n];
if (typeof result !=="number"){
result=fib(n-1) + fin(n-2);
}
return result;
};
return fib;
}
)();

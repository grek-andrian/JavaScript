/*Truncate a string if its longer than the given maximum string length.
  Return the truncated string with a ... ending */
function truncateString(str, num){
var trunc="";
if (str.length>num){
  if (str.length<3 || num<3){
    str=str.slice(0, num) + "...";
  }
  else {
    trunc=str.slice(0, num-3) + "...";
    console.log (trunc);
  }
}
console.log (str);
}

truncateString("Truncate a string if its longer than the given maximum string length.", 12);

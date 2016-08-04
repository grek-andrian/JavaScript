//Return true if the given string is a palindrome. Otherwise, return false
function palindrome(str){
  var lowRegStr=str.toLowerCase().replace(/[\W_]/g, '');
  var reverseStr=lowRegStr.split('').reverse().join('');
  console.log (reverseStr === lowRegStr); //return true or false
}
palindrome("eye");

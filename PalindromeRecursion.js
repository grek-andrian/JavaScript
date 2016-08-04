function isPalindrome(str){
  var strLen=str.length;
  //if string contain one or zero symbol its always palidrome
  if (strLen <= 1){
    return true;
  }
  if (str[0] != str[strLen-1]){
    return false;
  }
  return isPalindrome(str.slice(1, strLen-1));
}
console.log (isPalindrome("madam"));

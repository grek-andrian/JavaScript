//Write a function which takes a ROT13 encoded string as input and returns a decoded string
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split('');
  for (var x in str) {
    if (regEx.test(str[x])){
    rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
  } else {
    rotCharArray.push(str[x].charCodeAt());
  }
}
str = String.fromCharCode.apply(String, rotCharArray);
return str;
}

console.log (rot13("LBH QVQ VG!"));

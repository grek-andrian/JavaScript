//Repeat a given string num times. Return an empty string if num is not a positive number
function repeatStringNumTimes (str, num) {
  if (num > 0) {
    var repStr = "";
    for (i = 0; i < num; i++) {
      repStr += str;
    }
    console.log (repStr);
  }
  else{
    console.log ("");
  }
}
repeatStringNumTimes ("abc", 4);

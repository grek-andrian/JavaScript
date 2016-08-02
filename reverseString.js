function reverseString(str){
var ar=str.split(''); //split string to array
var arre=ar.reverse();
var strre=arre.join(''); //join array to reverse string
console.log (strre);
}

reverseString("Hello");

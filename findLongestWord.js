//Return the length of the longest word in the provided sentence.
function findLongestWord(str){
//split sentence to array
  var words=str.split(' ');
  var maxWord=0;
  for (i=0; i<words.length; i++)
  {
    if (words[i].length>maxWord)
    {
      maxWord=words[i].length;
    }
  }
  console.log (maxWord);
}
findLongestWord("Return the length of the longest word in the provided sentence");

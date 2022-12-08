/*
58. Length of Last Word
Easy
2.3K
136
Companies
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
 consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

var lengthOfLastWord = function(s) {
  //split the string by ' '
  let words = s.split(' ')
  words = words.filter((word) => {return word !== ''})
  return words[words.length - 1].length
  //get the last element in the new words array
  //return the length of that element
};
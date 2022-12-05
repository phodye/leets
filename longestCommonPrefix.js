/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function(strs) {
  let commonLetters = ''
  let firstWord = strs[0].split('')

  for (y = 0; y < firstWord.length; y++) {
      let common = true
      for (x = 0; x < strs.length; x++) {
          if (strs[x][y] !== firstWord[y]) {
              common = false
          }
      }
      if (common) {
          commonLetters = commonLetters + firstWord[y]
      } else {
          break
      }
  }

  return commonLetters
};
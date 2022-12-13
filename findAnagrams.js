/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

const arraysEqual = (arr1, arr2) => {
  for (let a = 0; a < arr1.length; a++) if (arr1[a] !== arr2[a]) return false
  return true
}

var findAnagrams = function(s, p) {
  let pArr = new Array(26).fill(0)
  let sArr = new Array(26).fill(0)
  let results = []

  for (let x = 0; x < p.length; x++) {
      let index = p.charCodeAt(x) % 26
      pArr[index]++
  }

  for (let y = 0; y < s.length; y++) {
      let index = s.charCodeAt(y) % 26
      sArr[index]++

      if (y > p.length - 1) {
          let outside = s.charCodeAt(y - (p.length)) % 26
          sArr[outside]--
      }

      if (y >= p.length - 1) {
          if (arraysEqual(sArr, pArr)) results.push(y - (p.length - 1))
      }
  }

  return results
};
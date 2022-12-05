/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/
var longestPalindrome = function(s) {
  let longest = 0;
  let keys = {};

    for (const char of s) {
        keys[char] = (keys[char] || 0) + 1;
        if (keys[char] % 2 == 0) longest += 2;
    }

    return s.length > longest ? longest + 1 : longest;
};
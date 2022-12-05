/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Example 3:
Input: s = "(]"
Output: false
*/

var isValid = function(s) {
  const parStack = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = parStack[parStack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      parStack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && parStack.length !== 0) {
      parStack.pop();
    } else if (s[i] === ']' && top === '[' && parStack.length !== 0) {
      parStack.pop();
    } else if (s[i] === '}' && top === '{' && parStack.length !== 0) {
      parStack.pop();
    } else {
      return false;
    }
  }

  return parStack.length === 0;
};
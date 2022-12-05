/*
Given the head of a singly linked list, return true if it is a
palindrome
 or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

var isPalindrome = function(head) {
  let valuesFound = [];
  while (head) {
      valuesFound.push(head.val);
      head = head.next;
  }
  let left = 0;
  let right = valuesFound.length - 1;
  while (left <= right) {
      if (valuesFound[left] !== valuesFound[right]) {
          return false;
      }
      left++, right--;
  }
  return true;
};
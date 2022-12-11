/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]
Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

var deleteDuplicates = function (head) {
  let newList = head
  let reference = newList
  while (head) {
      if (head.val !== newList.val) {
          newList.next = head
          newList = newList.next
      }
      head = head.next
  }
  if (newList && newList.next) {
      if (newList.val === newList.next.val) {
          newList.next = null
      }
  }
  return reference
};
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

var searchInsert = function(nums, target) {
  if (target < nums[0]) {
      return 0
  } else if (target > nums[nums.length - 1]) {
      return nums.length
  }
  for(x = 0; x < nums.length; x++) {
      if (nums[x] === target) {
          return x
      } else if (nums[x] < target && nums[x + 1] > target) {
          return x + 1
      }
  }
};

//BINARY SEARCH METHOD
var searchInsert = function(nums, target) {
  if (target < nums[0]) {
      return 0
  } else if (target > nums[nums.length - 1]) {
      return nums.length
  }

  let left = 0
  let right = nums.length - 1
  let middle = Math.floor(nums.length - 1/2)

  while (left <= right) {
      if (nums[middle] === target) {
          return middle
      } else if (nums[middle] < target) {
          left = middle + 1
          middle = Math.floor((left + right)/2)
      } else if (nums[middle] > target) {
          right = middle - 1
          middle = Math.floor((left + right)/2)
      }
  }

  return middle + 1
};
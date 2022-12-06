/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:
Input: root = [1]
Output: [[1]]
Example 3:
Input: root = []
Output: []
*/

var levelOrder = function(root) {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length != 0) {
      let subarr = []
      const n = queue.length
      for (let i = 0; i < n; i++) {
          let node = queue.pop()
          subarr.push(node.val)
          if (node.left) queue.unshift(node.left)
          if (node.right) queue.unshift(node.right)
      }
      result.push(subarr)
  }
  return result
};
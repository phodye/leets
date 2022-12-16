/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
*/

var isSymmetric = function(root) {
  let res = true

  const checkNodes = (node1, node2) => {
      if(!node1 && !node2) {
          return
      }
      if (!node1 || !node2 || node1.val !== node2.val) {
          res = false
          return
      }

      checkNodes(node1.left, node2.right)
      checkNodes(node1.right, node2.left)
  }
  checkNodes(root, root)

  return res
};
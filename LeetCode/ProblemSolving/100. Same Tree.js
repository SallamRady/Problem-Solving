// 100. Same Tree
/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function arrayToBinaryTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift();

    // Left child
    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

var isSameTree = function (p, q) {
  // Convert arrays to binary trees only at the top level
  if (Array.isArray(p)) p = arrayToBinaryTree(p);
  if (Array.isArray(q)) q = arrayToBinaryTree(q);
  
  // Base cases
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  
  // Compare values and recursively check children
  // Note: We're comparing tree nodes now, not arrays
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

// test cases
console.log("test case 1", isSameTree([1, 2, 3], [1, 2, 3]));
console.log("test case 2", isSameTree([1, 2], [1, null, 2]));
console.log("test case 3", isSameTree([1, 2, 1], [1, 1, 2]));

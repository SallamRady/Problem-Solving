/**
 * Definition for a binary tree node.
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


/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  // Handle array input for testing
  if (Array.isArray(root)) {
    root = arrayToBinaryTree(root);
  }
  
  if (!root) return 0;
  
  // Get height of left-most path
  const getLeftHeight = (node) => {
    let height = 0;
    while (node) {
      height++;
      node = node.left;
    }
    return height;
  };
  
  // Get height of right-most path
  const getRightHeight = (node) => {
    let height = 0;
    while (node) {
      height++;
      node = node.right;
    }
    return height;
  };
  
  // Main counting function with log(n)^2 complexity
  const count = (node) => {
    if (!node) return 0;
    
    const leftHeight = getLeftHeight(node);
    const rightHeight = getRightHeight(node);
    
    // If left and right heights are equal, it's a perfect binary tree
    if (leftHeight === rightHeight) {
      // Formula for perfect binary tree: 2^h - 1
      return (1 << leftHeight) - 1;
    } else {
      // Otherwise, recursively compute for left and right subtrees
      return 1 + count(node.left) + count(node.right);
    }
  };
  
  return count(root);
};

// test cases
console.log(countNodes([1, 2, 3, 4, 5, 6])); // 6
console.log(countNodes([1, 2, 3, 4, 5])); // 5
console.log(countNodes([1, 2])); // 2
console.log(countNodes([])); // 0
console.log(countNodes([1])); // 1

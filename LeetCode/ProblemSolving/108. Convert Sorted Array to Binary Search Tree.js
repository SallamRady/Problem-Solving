/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
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
 * @param {number[]} nums
 * @return {TreeNode} - Root of the BST
 */
var sortedArrayToBST = function (nums) {
    // Helper function to recursively build the BST
    const buildBST = (left, right) => {
        if (left > right) return null;
        
        // Choose the middle element as the root to ensure height-balance
        const mid = Math.floor((left + right) / 2);
        
        // Create a new node with the middle value
        const root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);
        
        return root;
    };
    
    // Return the root of the BST
    return buildBST(0, nums.length - 1);
};

// test cases
console.log(sortedArrayToBST([-10,-3,0,5,9]));//output must be [0,-3,9,-10,null,5]
console.log(sortedArrayToBST([1,3]));//output must be [3,1]
console.log(sortedArrayToBST([1,2,3,4,5,6,7]));//output must be [4,2,6,1,3,5,7]

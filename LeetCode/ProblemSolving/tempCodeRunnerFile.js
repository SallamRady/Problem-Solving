// Include all the necessary code from the original file
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Function to convert a TreeNode back to an array representation
 * @param {TreeNode} root - The root of the binary tree
 * @return {Array} - Array representation of the tree
 */
function treeToArray(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node === null) {
            result.push(null);
            continue;
        }
        
        result.push(node.val);
        
        // For a complete representation, we add nulls too
        // But we don't queue null nodes
        if (node.left || node.right) {
            queue.push(node.left || null);
            queue.push(node.right || null);
        }
    }
    
    // Remove trailing nulls for a cleaner representation
    while (result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

/**
 * @param {number[]} nums
 * @return {Array} - Array representation of the BST
 */
var sortedArrayToBST = function (nums) {
    // Build a balanced BST from the sorted array
    const helper = (left, right) => {
        if (left > right) return null;
        
        // Choose the middle element as the root to ensure height-balance
        const mid = Math.floor((left + right) / 2);
        
        // Create a new node with the middle value
        const root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        
        return root;
    };
    
    // Create the BST
    const bstRoot = helper(0, nums.length - 1);
    
    // Convert the BST back to array format for output
    return treeToArray(bstRoot);
};

// Test cases
console.log(sortedArrayToBST([-10,-3,0,5,9])); //output must be [0,-3,9,-10,null,5]
console.log(sortedArrayToBST([1,3])); //output must be [3,1]
console.log(sortedArrayToBST([1,2,3,4,5,6,7])); //output must be [4,2,6,1,3,5,7]

// 94. Binary Tree Inorder Traversal
/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively?
*/
/*
Input: root = [1,null,2,3]
Output: [1,3,2]
*/

// Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Helper function to convert array representation to binary tree
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Handle array input by converting it to a tree
    if (Array.isArray(root)) {
        root = arrayToBinaryTree(root);
    }
    
    // Recursive solution
    // const result = [];
    // 
    // function traverse(node) {
    //     if (node === null) return;
    //     
    //     traverse(node.left);   // Visit left subtree
    //     result.push(node.val); // Visit root
    //     traverse(node.right);  // Visit right subtree
    // }
    // 
    // traverse(root);
    // return result;
    
    // Iterative solution using stack
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current is now null, pop the stack
        current = stack.pop();
        
        // Add the node value to result
        result.push(current.val);
        
        // We've visited the node and its left subtree
        // Now move to the right subtree
        current = current.right;
    }
    
    return result;
};

// test cases
console.log("test case 1", inorderTraversal([1, null, 2, 3]));
console.log("test case 2", inorderTraversal([]));
console.log("test case 3", inorderTraversal([1]));

// Additional test case from the examples
console.log("test case 4", inorderTraversal([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]));

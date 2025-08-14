/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // If the input is an array, convert it to a TreeNode structure
    if (Array.isArray(root)) {
        root = arrayToBinaryTree(root);
    }
    
    if (root === null) return true;
    
    const isMirror = (left, right) => {
        if (left === null && right === null) return true;
        if (left === null || right === null) return false;
        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    };
    
    return isMirror(root.left, root.right);
};


// test cases
console.log(isSymmetric([1,2,2,3,4,4,3]));
console.log(isSymmetric([1,2,2,null,3,null,3]));
console.log(isSymmetric([1]));

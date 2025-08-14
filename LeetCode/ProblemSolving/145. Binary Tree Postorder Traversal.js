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

var postorderTraversal = function(root) {
    if(root === null || root.length === 0) return [];
    if(Array.isArray(root)) {
        root = arrayToBinaryTree(root);
    }
    const result = [];
    const stack = [root];
    while(stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return result?.reverse();
};


// test cases
console.log(postorderTraversal([1,null,2,3]));
console.log(postorderTraversal([]));
console.log(postorderTraversal([1]));

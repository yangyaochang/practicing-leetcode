/*
Time Complexity: O(H), where H is a tree height. 
That results in O(logn) in the average case, and O(n) in the worst case. 
Space Complexity: O(H), where H is a tree height. 
That results in O(logn) in the average case, and O(n) in the worst case.
*/

var insertIntoBST = function(root, val) {
    
    const dfs = (current) => {
        if (current === null) {return new TreeNode(val)}
        
        if (current.val > val) {
            current.left = dfs (current.left)
        } else if (current.val < val) {
            current.right = dfs(current.right)
        }
        return current
    }
    
    return dfs(root)
};

var insertIntoBST = function(root, val) {
    let current = root
    
    if (root === null) {return new TreeNode(val)}

    while (current !== null) {
        if (current.val > val) {
            if (current.left) {
                current = current.left
            } else {
                current.left = new TreeNode(val)
                return root
            }
        } else if (current.val < val) {
            if (current.right) {
                current = current.right
            } else {
                current.right = new TreeNode(val)
                return root
            }
        }
    }
};
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
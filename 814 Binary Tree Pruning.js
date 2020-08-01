/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var pruneTree = function(root) {
    if (root === null) {return null}
    
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left === 0) {
            current.left = null
        } 
        if (right === 0) {
            current.right = null
        }
        return left + right + current.val
    }
    
    dfs(root)
    return root
};
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var maxDepth = function(root) {
    let maxDepth = 0
    
    const dfs = (current, level) => {
        if (current === null) {return null}
        
        let left = dfs(current.left, level + 1)
        let right = dfs(current.right, level + 1)
        
        if (left === null && right === null) {
            maxDepth = Math.max(maxDepth, level)
        }
    }
    
    dfs(root, 1)
    return maxDepth
};
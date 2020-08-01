/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var minDepth = function(root) {
    let minDepth = Infinity
    
    const dfs = (current, depth) => {
        if (current === null) {return null}
        
        let left = dfs(current.left, depth + 1)
        let right = dfs(current.right, depth + 1)
        
        if (left === null && right === null) {
            minDepth = Math.min(minDepth, depth)
        }
    }
    
    if (root === null) {return 0}
    dfs(root, 1)
    return minDepth
};
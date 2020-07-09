var findTilt = function(root) {
    let totalTilt = 0
    
    if (root === null) {return totalTilt}
    
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        totalTilt += Math.abs(left - right)
        return left + right + current.val
    }
    
    dfs(root)
    return totalTilt
};
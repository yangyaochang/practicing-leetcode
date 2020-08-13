var maxAncestorDiff = function(root) {
    if (root === null) {return 0}
    
    let maxDiff = -Infinity
    
    const dfs = (current, ancestors) => {
        if (current === null) {return}
        
        ancestors.forEach(ancestor => {
            maxDiff = Math.max(maxDiff, Math.abs(ancestor - current.val))
        })
        
        ancestors.push(current.val) 
        dfs(current.left, ancestors)
        dfs(current.right, ancestors)
        ancestors.pop()
    }
    
    dfs(root, [])
    return maxDiff
};
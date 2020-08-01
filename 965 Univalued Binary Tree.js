var isUnivalTree = function(root) {
    
    if (root === null) {return false}
    let value = root.val
    
    const dfs = (current) => {
        if (current === null) {return true}
        
        if (current.val !== value) {return false}
        
        return dfs(current.left) && dfs(current.right)
    }
    
    return dfs(root)
};
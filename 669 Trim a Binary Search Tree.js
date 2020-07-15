var trimBST = function(root, L, R) {
    const dfs = (current) => {
        if (current === null) {return null}
        if (current.val > R) {return dfs(current.left)}
        if (current.val < L) {return dfs(current.right)}
        
        current.left = dfs(current.left)
        current.right = dfs(current.right)
        
        return current
    }
    
    if (root === null) {return null}
    return dfs(root)
};
var countNodes = function(root) {
    const dfs = (cur) => {
        if (cur === null) {return 0}
        
        let left = dfs(cur.left)
        let right = dfs(cur.right)
        
        return left + right + 1
    }
    
    return dfs(root)
};
var lowestCommonAncestor = function(root, p, q) {
    let lca
    let found = false
    
    const dfs = (current) => {
        if (current === null) {return false}
        if (found) {return}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        let currentIsTarget = (current === p || current === q) ? true : false
        
        if ((left && right) || (left && currentIsTarget) || (right && currentIsTarget)) {
            lca = current
            found = true
        }
        return currentIsTarget || left || right
    }
    
    dfs(root)
    return lca
};
var distributeCoins = function(root) {
    if (root === null) {return 0}
    let num = 0
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        num += Math.abs(left)
        num += Math.abs(right)
        
        return current.val - 1 + left + right
    }
    dfs(root)
    return num
};
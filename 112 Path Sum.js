var hasPathSum = function(root, sum) {
    let found = false
    
    const dfs = (current, currentSum) => {
        if (current === null) {return null}
        
        currentSum += current.val
        let left = dfs(current.left, currentSum)
        let right = dfs(current.right, currentSum)
        
        if (left === null && right === null) {
            if (currentSum === sum) {found = true}
        }
    }
    
    if (root === null) {return false}
    dfs(root, 0)
    return found
};
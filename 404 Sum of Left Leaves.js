var sumOfLeftLeaves = function(root) {
    let sum = 0
    
    const dfs = (current, child) => {
        if (current === null) {return null}
        
        let left = dfs(current.left, 'left')
        let right = dfs(current.right, 'right')
        
        if (left === null && right === null && child === 'left') {
            sum += current.val
        }
    }
    
    dfs(root, '')
    return sum
}
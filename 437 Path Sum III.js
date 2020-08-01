var pathSum = function(root, sum) {
    let count = 0
    
    const dfs = (current) => {
        if (current === null) {return}
        
        countPaths(current)
        
        dfs(current.left)
        dfs(current.right)
    }
    
    dfs(root)
    return count
    
    function countPaths(root) {
        const add = (c, cSum) => {
            if (c === null) {return null}
        
            cSum += c.val
            if (cSum === sum) { 
                count++
            }
            
            add(c.left, cSum)
            add(c.right, cSum)
        }
        
        add(root, 0)
    }
};
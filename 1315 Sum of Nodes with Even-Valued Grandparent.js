var sumEvenGrandparent = function(root) {
    let sum = 0
    
    const dfs = (current, parentVal) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left, current.val)
        let right = dfs(current.right, current.val)
        
        if (parentVal % 2 === 0) {
            sum += left
            sum += right
        }
        
        return current.val
    }
    
    dfs(root, 1)
    // 一開始給一個奇數，跳過 level = 2 
    return sum
};
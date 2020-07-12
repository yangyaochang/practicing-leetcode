var goodNodes = function(root) {
    let num = 0
    
    const dfs = (current, max) => {
        if (current === null) {return}
        
        if (current.val >= max) {
            max = current.val
            num++
        }
        
        dfs(current.left, max)
        dfs(current.right, max)
    }
    
    dfs(root, -Infinity)
    return num
};
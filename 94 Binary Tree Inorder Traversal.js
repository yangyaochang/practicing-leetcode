var inorderTraversal = function(root) {
    let list = []
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        list.push(current.val)
        dfs(current.right)
    }
    
    dfs(root)
    return list
};
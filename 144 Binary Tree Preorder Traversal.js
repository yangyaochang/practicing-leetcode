var preorderTraversal = function(root) {
    let list = []
    
    const dfs = (current) => {
        if (current === null) {return}
        
        list.push(current.val)
        dfs(current.left)
        dfs(current.right)
    }
    
    dfs(root)
    return list
};


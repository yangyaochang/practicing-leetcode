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

// 第二次做

var preorderTraversal = function(root) {
    const list = []

    const dfs = (current) => {
        if (current === null) {return}

        list.push(current.val)
        dfs(current.left)
        dfs(current.right)
    }

    dfs(root)
    return list
}


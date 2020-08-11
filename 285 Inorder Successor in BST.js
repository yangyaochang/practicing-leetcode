var inorderSuccessor = function(root, p) {
    if (root === null) {return null}
    const list = []
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        list.push(current)
        dfs(current.right)
    }
    
    dfs(root)
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] === p) {return (list[i + 1]) ? list[i + 1] : null}
    }
};
var increasingBST = function(root) {
    let values = []
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        values.push(current.val)
        dfs(current.right)
    }
    
    dfs(root)
    
    let newRoot = new TreeNode(values[0])
    let currentNode = newRoot
    
    for (let i = 1; i < values.length; i++) {
        let node = new TreeNode(values[i])
        currentNode.right = node
        currentNode = node
    }
    
    return newRoot
};
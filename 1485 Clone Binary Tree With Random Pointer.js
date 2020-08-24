var copyRandomBinaryTree = function(root) {
    const cache = new Map()
    
    const dfs = (current) => {
        if (current === null) {return null}
        if (cache.has(current)) {return cache.get(current)}
        
        const newNode = new NodeCopy(current.val)
        cache.set(current, newNode)
        
        newNode.left = dfs(current.left)
        newNode.right = dfs(current.right)
        newNode.random = dfs(current.random)
        return newNode
    }
    
    return dfs(root)
};
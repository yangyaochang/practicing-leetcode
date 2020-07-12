var getLonelyNodes = function(root) {
    let list = []
    
    const dfs = current => {
        if (current === null) {return null}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left === null && right !== null) {
            list.push(right)
        } else if (right === null && left !== null) {
            list.push(left)
        }
        return current.val
    }
    dfs(root)
    return list
};
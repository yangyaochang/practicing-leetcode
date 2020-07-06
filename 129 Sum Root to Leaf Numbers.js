var sumNumbers = function(root) {
    let list = []
    
    const dfs = (current, path) => {
        if (current === null) {return null}
        
        path += current.val
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)
        
        if (left === null && right === null) {
            list.push(path)
        }
    }
    
    dfs(root, '')
    let sum = 0
    
    for (let i = 0; i < list.length; i++) {
        sum += Number(list[i])
    }
    return sum
};
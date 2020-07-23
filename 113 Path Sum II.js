var pathSum = function(root, sum) {
    let list = []
    
    const dfs = (current, path) => {
        if (current === null) {return null}
    
        if (path === '') {path += current.val}
        else {path += `,${current.val}`}
        
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)
        
        if (left === null && right === null) {
            path = path.split(',').map(num => Number(num))
            let pathSum = 0
            
            for (let i = 0; i < path.length; i++) {
                pathSum += path[i]
            }
            
            if (pathSum === sum) {list.push(path)}
        }
    }
    
    dfs(root, '')
    return list
};
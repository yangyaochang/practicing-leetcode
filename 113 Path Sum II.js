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

// 第二次做，用了 backtracking 技巧 code 看起來比較簡潔

var pathSum = function(root, sum) {
    const list = []
    
    const dfs = (cur, path) => {
        if (cur === null) {return null}
        
        path.push(cur.val)
        let left = dfs(cur.left, path)
        let right = dfs(cur.right, path)
        
        if (left === null && right === null) {
            let pathSum = 0
            path.forEach(val => {pathSum += val})
            if (pathSum === sum) {list.push([...path])}
        }
        path.pop()
    }
    
    dfs(root, [])
    return list
};
var isUnivalTree = function(root) {
    
    if (root === null) {return false}
    let value = root.val
    
    const dfs = (current) => {
        if (current === null) {return true}
        if (current.val !== value) {return false}
        
        return dfs(current.left) && dfs(current.right)
    }
    
    return dfs(root)
};

var isUnivalTree = function(root) {
    let isUni = true

    const dfs = (cur, parentVal) => {
        if (cur === null) {return}
        if (!isUni) {return}

        if (parentVal !== null && cur.val !== parentVal) {
            isUni = false
            return 
        } 

        dfs(cur.left, cur.val)
        dfs(cur.right, cur.val)
    }

    dfs(root, null)
    return isUni
};

// BFS 作法

var isUnivalTree = function(root) {
    const queue = []

    queue.push(root)
    let pre = null

    while (queue.length > 0) {
        const current = queue.shift()

        if (pre !== null && pre.val !== current.val) {return false} 
        pre = current

        if (current.left) {queue.push(current.left)}
        if (current.right) {queue.push(current.right)}
    }
    return true
}
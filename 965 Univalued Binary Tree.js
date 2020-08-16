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
var isCousins = function(root, x, y) {
    if (root === null) {return false}
    
    let info = {}
    let result
    
    const dfs = (parent, current, level) => {
        if (current === null) {return}
        
        if (current.val === x || current.val === y) {
            if (!info.hasOwnProperty('parent')) {
                info.parent = parent
                info.level = level
            } else {
                if (info.parent !== parent && info.level === level) {
                    result = true
                } else {
                    result = false
                }
            }
        }
        dfs(current, current.left, level + 1)
        dfs(current, current.right, level + 1)
    }
    
    dfs(null, root, 0)
    
    return result
};
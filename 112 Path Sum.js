var hasPathSum = function(root, sum) {
    let found = false
    
    const dfs = (current, currentSum) => {
        if (current === null) {return null}
        
        currentSum += current.val
        let left = dfs(current.left, currentSum)
        let right = dfs(current.right, currentSum)
        
        if (left === null && right === null) {
            if (currentSum === sum) {found = true}
        }
    }
    
    if (root === null) {return false}
    dfs(root, 0)
    return found
};

var hasPathSum = function(root, sum) {
    if (root === null) {return false}

    let equal = false

    const dfs = (cur, curSum) => {
        if (cur === null) {return null} 

        curSum += cur.val
        let left = dfs(cur.left, curSum)
        let right = dfs(cur.right, curSum)

        if (left === null && right === null) {
            if (curSum === sum) {equal = true}
        }
    }

    dfs(root, 0)
    return equal
};
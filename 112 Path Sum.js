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

// 第三次做

var hasPathSum = function(root, sum) {
    if (root === null) {return false}

    let isEqual = false

    const dfs = (cur, curSum) => {
        if (cur === null) {return}
        if (isEqual) {return}

        dfs(cur.left, curSum + cur.val)
        dfs(cur.right, curSum + cur.val)

        if (cur.left === null && cur.right === null && curSum + cur.val === sum) {
            isEqual = true
        }
    }

    dfs(root, 0)
    return isEqual
};

// 第四次做

var hasPathSum = function(root, sum) {
    let hasPath = false

    const dfs = (cur, curSum) => {
        if (cur === null) {return null}

        let left = dfs(cur.left, curSum + cur.val)
        let right = dfs(cur.right, curSum + cur.val)

        if (left === null && right === null) {
            if ((curSum + cur.val) === sum)  {hasPath = true}
        }
        return cur
    }

    if (root === null) {return false}
    dfs(root, 0)
    return hasPath
}
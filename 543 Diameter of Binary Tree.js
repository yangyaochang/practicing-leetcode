const diameterOfBinaryTree = (root) => {
    let diameter = 0
    
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        diameter = Math.max(diameter, left + right)
        return Math.max(left, right) + 1
    }
    
    dfs(root)
    return diameter
};

// 第二次做

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0

    const dfs = (cur) => {
        if (cur === null) {return 0}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        maxDiameter = Math.max(left + right, maxDiameter)

        return Math.max(left, right) + 1
    }

    dfs(root)
    return maxDiameter
};

// 第三次做

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0

    const dfs = (cur) => {
        if (cur === null) {return 0}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        maxDiameter = Math.max(maxDiameter, left + right)

        return Math.max(left, right) + 1
    }

    dfs(root)
    return maxDiameter
}

// 第四次做

var diameterOfBinaryTree = function(root) {
    let connectedNodes = 0

    const dfs = (current) => {
        if (current === null) {return 0}

        let left = dfs(current.left)
        let right = dfs(current.right)

        connectedNodes = Math.max(left + right + 1, connectedNodes)
        return Math.max(left + 1, right + 1)
    }
    
    if (root === null) {return 0}
    dfs(root)
    return connectedNodes - 1
}
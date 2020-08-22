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
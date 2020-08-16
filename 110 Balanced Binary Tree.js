/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var isBalanced = function(root) {
    let balanced = true
    
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (Math.abs(left - right) <= 1) {
            return Math.max(left, right) + 1
        } else {
            balanced = false
        }
    }
    
    if (root === null) {return true}
    dfs(root)
    return balanced
};

// 第二次做

var isBalanced = function(root) {
    let balanced = true
    
    if (root === null) {return balanced}

    const dfs = (current) => {
        if (current === null) {return 0}

        let left = dfs(current.left)
        let right = dfs(current.right)

        if (Math.abs(left - right) > 1) {balanced = false}
        return Math.max(left, right) + 1
    }
    
    dfs(root)
    return balanced
};
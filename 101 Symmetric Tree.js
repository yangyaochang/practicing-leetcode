/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var isSymmetric = function(root) {
    if (root === null) {return null}
    
    const dfs = (current1, current2) => {
        if (current1 === null && current2 === null) {return true}
        if (current1 === null || current2 === null) {return false}
        if (current1.val !== current2.val) {return false}
        
        return dfs(current1.left, current2.right) && dfs(current1.right, current2.left)
    }
    
    return dfs(root, root)
};

// 第二次做

var isSymmetric = function(root) {
    if (root === null) {return true}
    
    const dfs = (c1, c2) => {
        if (c1 === null && c2 === null) {return true}
        if (c1 === null || c2 === null || c1.val !== c2.val) {return false}
        
        return dfs(c1.left, c2.right) && dfs(c1.right, c2.left)
    }
    
    return dfs(root, root)
};

// 第三次做

var isSymmetric = function(root) {
    const dfs = (cur1, cur2) => {
        if (cur1 === null && cur2 === null) {return true}
        if (cur1 === null || cur2 === null || cur1.val !== cur2.val) {return false}

        return dfs(cur1.left, cur2.right) && dfs(cur1.right, cur2.left)
    }
    return dfs(root, root)
}

// 第四次做

var isSymmetric = function(root) {
    const dfs = (p , q) => {
        if (p === null && q === null) {return true}
        if (p === null || q === null || p.val !== q.val) {return false}

        return dfs(p.left, q.right) && dfs(p.right, q.left)
    }

    return dfs(root, root)
}
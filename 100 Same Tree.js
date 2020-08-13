/*
Time Complexity: O(n)
Space Complexity: O(H) => worst case: H = n tree 為 linked list
*/

var isSameTree = function(p, q) {
    const dfs = (current1, current2) => {
        if (current1 === null && current2 === null) {return true}
        if (current1 === null || current2 === null) {return false}
        if (current1.val !== current2.val) {return false}
        
        return dfs(current1.left, current2.left) && dfs(current1.right, current2.right)
    }
    
    return dfs(p, q)
};

// 第二次做

var isSameTree = function(p, q) {
    const dfs = (c1, c2) => {
        if (c1 === null && c2 === null) {return true}
        if (c1 === null || c2 === null || c1.val !== c2.val) {return false}
        
        return dfs(c1.left, c2.left) && dfs(c1.right, c2.right)
    }
    return dfs(p, q)
};
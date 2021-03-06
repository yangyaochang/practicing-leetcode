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

// 第三次做

var isSameTree = function(p, q) {
    const dfs = (cur1, cur2) => {
        if (cur1 === null && cur2 === null) {return true}
        if (cur1 === null || cur2 === null || cur1.val !== cur2.val) {return false}
        
        return dfs(cur1.left, cur2.left) && dfs(cur1.right, cur2.right)
    }

    return dfs(p, q)
}

// 第四次做
// Base case 有三個，兩個都為 null，其中一個為 null，兩者值不一樣
// Recursive case 就是當兩者值一樣，繼續 traverse

var isSameTree = function(p, q) {
    const dfs = (current_p, current_q) => {
        if (current_p === null && current_q === null) {return true}
        if (current_p.val !== current_q.val || current_p === null || current_q === null) {return false}

        return dfs(current_p.left, current_q.left) && dfs(current_p.right, current_q.right)
    }

    return dfs(p, q)
}

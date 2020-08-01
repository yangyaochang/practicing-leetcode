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
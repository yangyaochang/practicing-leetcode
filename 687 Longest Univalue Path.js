/*
樹狀結構 DFS 的 recursion，call stack 不會是 O(n) 而是 O(H)，或 O(logn)，H 為樹高，不會所有的 node 同時被 called。
*/

var longestUnivaluePath = function(root) {
    let longestPath = 0
    
    if (root === null) {return longestPath}
    
    const dfs = (current) => {
        if (current === null) {return [null, null]}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left[0] === current.val && right[0] === current.val) {
            longestPath = Math.max(longestPath, left[1] + right[1])
            return [current.val, Math.max(left[1], right[1]) + 1]
        }
        if (left[0] === current.val) {
            longestPath = Math.max(longestPath, left[1])
            return [current.val, left[1] + 1]
        }
        if (right[0] === current.val) {
            longestPath = Math.max(longestPath, right[1])
            return [current.val, right[1] + 1]
        }
        return [current.val , 1]
    }
    
    dfs(root)
    return longestPath
};
/*
樹狀結構 DFS 的 recursion，call stack 不會是 O(n) 而是 O(H)，或 O(logn)，H 為樹高，不會所有的 node 同時被 called。
*/

var longestUnivaluePath = function(root) {
    let maxLength = 0
    
    const postorder = (current) => {
        if (current === null) {return [null, 0]}
        
        let left = postorder(current.left)
        let right = postorder(current.right)
        
        if (left[0] === current.val && right[0] === current.val) {
            maxLength = Math.max(maxLength, left[1] + right[1])
            return [current.val, Math.max(left[1], right[1]) + 1]
        } 
        if (left[0] === current.val) {
            maxLength = Math.max(maxLength, left[1])
            return [current.val, left[1] + 1]
        }
        if (right[0] === current.val) {
            maxLength = Math.max(maxLength, right[1])
            return [current.val, right[1] + 1]
        }
        return [current.val, 1]
    }
    
    postorder(root)
    return maxLength
};
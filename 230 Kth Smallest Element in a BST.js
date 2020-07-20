/*
Time Complexity: O(k)
That results in O(logn) in the average case, and O(n) in the worst case.
*/

var kthSmallest = function(root, k) {
    let kth
    
    const dfs = (current) => {
        if (current === null) {return}
        if (k === 0) {return}
        
        dfs(current.left)
        if (k > 0) {k--}
        if (k === 0 && kth === undefined) {
            kth = current.val
            return
        }
        dfs(current.right)
    }
    
    dfs(root)
    return kth
};
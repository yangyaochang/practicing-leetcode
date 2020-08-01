/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var trimBST = function(root, L, R) {
    const dfs = (current) => {
        if (current === null) {return null}
        
        current.left = dfs(current.left)
        current.right = dfs(current.right)
        
        if (L > current.val) {
            return current.right
        } 
        if (current.val > R) {
            return current.left
        }
        return current
    }
    
    return dfs(root)
};
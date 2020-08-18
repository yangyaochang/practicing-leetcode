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

/*
    const dfs = (current) => {
        if (current === null) {return null}

        current.left = dfs(current.left)
        current.right = dfs(current.right)

        return current
    }
這一段就是從底部重構 Tree

current.left
current.right

在等傳回來的 node

當 current.val 出界時，調用 dfs 往下繼續找 vald subtree，一樣從底部重構

if (current.val < L) {return dfs(current.right)}
if (current.val > R) {return dfs(current.left)}

*/

var trimBST = function(root, L, R) {
    const dfs = (current) => {
        if (current === null) {return null}
        if (current.val < L) {return dfs(current.right)}
        if (current.val > R) {return dfs(current.left)}

        current.left = dfs(current.left)
        current.right = dfs(current.right)

        return current
    }

    return dfs(root)
};
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

// 第三次做

var trimBST = function(root, L, R) {
    const trim = (cur) => {
        if (cur === null) {return null}

        cur.left = trim(cur.left)
        cur.right = trim(cur.right)

        if (cur.val < L) {return cur.right}
        if (cur.val > R) {return cur.left}
        return cur
    }

    return trim(root)
};

// 由底部重構整顆 BST
// 因為是 BST 所以當 current < L 時，左子樹一定都小於 L，return current.right
// 因為是 BST 所以當 current > R 時，右子樹一定都大於 R，return current.left
// 不用再考慮 return 的 current.left 或 current.right 是否在範圍內，因為是 bottom-up 所以已經檢查過

var trimBST = function(root, L, R) {
    const dfs = (current) => {
        if(current === null) {return null}

        current.left = dfs(current.left)
        current.right = dfs(current.right)

        if (L <= current.val && current.val <= R) {return current}
        else if (current.val < L) {return current.right}
        else if (current.val > R) {return current.left}
    }

    return dfs(root)
}
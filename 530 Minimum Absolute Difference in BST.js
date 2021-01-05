/*
Time Complexity: O(n)
Space Complexity: O(n)

一個 node 的 lowerLimit 與 upperLimit 是與這個 node 最接近的兩個值
*/

var getMinimumDifference = function(root) {
    let minDiff = Infinity
    
    const dfs = (current, lowerLimit, upperLimit) => {
        if (current === null) {return}
        
        if (lowerLimit !== undefined) {
            minDiff = Math.min(minDiff, Math.abs(current.val - lowerLimit))
        }
        if (upperLimit !== undefined) {
            minDiff = Math.min(minDiff, Math.abs(current.val - upperLimit))
        }
        
        dfs(current.left, lowerLimit, current.val)
        dfs(current.right, current.val, upperLimit)
    }
    
    if (root === null) {return 0}
    dfs(root)
    return minDiff
};

// 跟 98 題一樣在 BST 上 traverse 的同時把 lowerLimit, upperLimit 傳下去

var getMinimumDifference = function(root) {
    if (root === null) {return 0}
    let minDiff = Infinity

    const dfs = (cur, lowerLimit, upperLimit) => {
        if (cur === null) {return}

        if (lowerLimit !== null) {minDiff = Math.min(minDiff, cur.val - lowerLimit)}
        if (upperLimit !== null) {minDiff = Math.min(minDiff, upperLimit - cur.val)}

        dfs(cur.left, lowerLimit, cur.val)
        dfs(cur.right, cur.val, upperLimit)
    }
    dfs(root, null, null)
    return minDiff
}

// 利用 inorder traversal 按照順序走訪每一個值

var getMinimumDifference = function(root) {
    if (root === null) {return 0}
    let pre = null
    let minDiff = Infinity

    const dfs = (cur) => {
        if (cur === null) {return}

        dfs(cur.left)
        if (pre !== null) {
            minDiff = Math.min(minDiff, Math.abs(pre - cur.val))
        }
        pre = cur.val
        dfs(cur.right)
    }
    dfs(root)
    return minDiff
};

var getMinimumDifference = function(root) {
    let minDiff = Infinity
    let preVal = null
    
    const dfs = (current) => {
        if (current === null) {return}

        dfs(current.left)
        if (preVal === null) {
            preVal = current.val
        } else {
            minDiff = Math.min(minDiff, Math.abs(preVal - current.val))
            preVal = current.val
        }
        dfs(current.right)
    }

    dfs(root)
    return minDiff
}
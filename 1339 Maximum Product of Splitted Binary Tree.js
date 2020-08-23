/*
先求總和，再透過 DFS 逐步嘗試切掉每一個 subtree
*/

var maxProduct = function(root) {
    let maxProduct = - Infinity
    const modulo = Math.pow(10, 9) + 7

    const getSum = (cur) => {
        if (cur === null) {return 0}

        return getSum(cur.left) + getSum(cur.right) + cur.val
    }

    let sum = getSum(root)

    const dfs = (cur) => {
        if (cur === null) {return 0}

        let subTreeSum = dfs(cur.left) + dfs(cur.right) + cur.val
        maxProduct = Math.max(maxProduct, subTreeSum * (sum - subTreeSum))
        return subTreeSum
    }

    dfs(root)
    return maxProduct % modulo
};
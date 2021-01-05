/*
就是要把四種情況都考慮到
left + right + cur.val, left + cur.val, right + cur.val, cur.val
以及返回的值會少一個 left + right + current.val
*/

var maxPathSum = function(root) {
    let maxPath = -Infinity

    const dfs = (current) => {
        if (current === null) {return 0}

        let left = dfs(current.left)
        let right = dfs(current.right)

        const curMax = Math.max(left + right + current.val, left + current.val, right + current.val, current.val)
        maxPath = Math.max(maxPath, curMax)
        return Math.max(left + current.val, right + current.val, current.val)
    }

    dfs(root)
    return maxPath
};

// 第二次做

var maxPathSum = function(root) {
    let maxSum = -Infinity

    const dfs = (cur) => {
        if (cur === null) {return 0}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        maxSum = Math.max(maxSum, left + right + cur.val, left + cur.val, right + cur.val, cur.val)
        return Math.max(left + cur.val, right + cur.val, cur.val) 
    }

    dfs(root)
    return maxSum
};

// 第三次做

var maxPathSum = function(root) {
    let maxSum = -Infinity

    const dfs = (current) => {
        if (current === null) {return 0}

        let left = dfs(current.left)
        let right = dfs(current.right)

        maxSum = Math.max(left + right + current.val, left + current.val, right + current.val, current.val, maxSum)
        return Math.max(current.val, left + current.val, right + current.val)
    }

    dfs(root)
    return maxSum
};
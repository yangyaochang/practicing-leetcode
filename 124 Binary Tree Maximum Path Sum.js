/*
就是要把四種情況都考慮到
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
/*
左子樹可為 null 或值相等，右子樹可為 null 或值相等，四種狀況都是 univalue
*/

var countUnivalSubtrees = function(root) {
    let num = 0

    const dfs = (cur) => {
        if (cur === null) {return null}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        if ((cur.val === left || left === null) && (cur.val === right || right === null)) {
            num++
            return cur.val
        }
    }

    dfs(root)
    return num
};
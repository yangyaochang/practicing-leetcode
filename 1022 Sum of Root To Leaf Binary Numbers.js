var sumRootToLeaf = function(root) {
    let sum = 0

    const dfs = (cur, path) => {
        if (cur === null) {return null}

        path += cur.val
        let left = dfs(cur.left, path)
        let right = dfs(cur.right, path)

        if (left === null && right === null) {
            sum += parseInt(path, 2)
        }
    }

    dfs(root, '')
    return sum
};
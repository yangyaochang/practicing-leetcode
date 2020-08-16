/*
紀錄最後一個 level 的所有 nodes，搜尋第一個與最後一個的 lowest common ancestor
注意如果最後一個 level 只有一個 node，LCA 就是本身 
*/

var subtreeWithAllDeepest = function(root) {
    const queue = []
    const deepestLevel = [1, []]

    queue.push([root, 1]) 

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level > deepestLevel[0]) {
            deepestLevel[0]++
            deepestLevel[1] = []
        }
        deepestLevel[1].push(current)

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }

    const target1 = deepestLevel[1][0]
    const target2 = deepestLevel[1][deepestLevel[1].length - 1]
    let common = null

    const dfs = (cur) => {
        if (cur === null) {return false}
        if (cur === target1 || cur === target2) {
            common = cur
            return true
        }

        let left = dfs(cur.left) 
        let right = dfs(cur.right)

        if (left && right) {common = cur}
        return left || right
    }

    dfs(root)
    return common
};
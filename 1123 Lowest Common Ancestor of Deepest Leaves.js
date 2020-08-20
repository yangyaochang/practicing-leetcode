/*
先取得所有的 deepest leaves，如果只有一個，則 lowest common ancestor 就是本身
若超過一個，則 lowest common ancestor 會是第一個與最後一個 deepest leaves 的 lowest common ancestor。
因為兩者距離最遠
*/

var lcaDeepestLeaves = function(root) {
    const deepestLeaves = {level: 1, leaves: []}
    const queue = []

    queue.push([root, 1])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level > deepestLeaves.level) {
            deepestLeaves.level = level
            deepestLeaves.leaves = []
        }
        deepestLeaves.leaves.push(current)

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }

    const {leaves} = deepestLeaves

    if (leaves.length === 1) {return leaves[0]}
    
    const target1 = leaves[0]
    const target2 = leaves[leaves.length - 1]
    const LCA

    const dfs = (cur) => {
        if (cur === null) {return false}
        if (cur === target1 || cur === target2) {return true}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        if (left === true && right === true) {LCA = cur}
        return left || right
    }

    dfs(root)
    return LCA
}
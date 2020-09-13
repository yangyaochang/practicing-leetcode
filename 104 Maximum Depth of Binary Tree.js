/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var maxDepth = function(root) {
    let maxDepth = 0
    
    const dfs = (current, level) => {
        if (current === null) {return null}
        
        let left = dfs(current.left, level + 1)
        let right = dfs(current.right, level + 1)
        
        if (left === null && right === null) {
            maxDepth = Math.max(maxDepth, level)
        }
    }
    
    dfs(root, 1)
    return maxDepth
};

var maxDepth = function(root) {
    let depth = 0

    const dfs = (current, level) => {
        if (current === null) {return null}

        let left = dfs(current.left, level + 1)
        let right = dfs(current.right, level + 1)

        if (left === null && right === null) {
            depth = Math.max(depth, level)
        }
    }

    dfs(root, 0)
    return depth
}

var maxDepth = function(root) {
    const queue = []
    let maxDepth = 0

    if (root === null) {return maxDepth}

    queue.push([root, 1])

    while (queue.length > 0) {
        const [cur, level] = queue.shift()

        maxDepth = level
        if (cur.left) {queue.push([cur.left, level + 1])}
        if (cur.right) {queue.push([cur.right, level + 1])}
    }
    return maxDepth
}
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var minDepth = function(root) {
    let minDepth = Infinity
    
    const dfs = (current, depth) => {
        if (current === null) {return null}
        
        let left = dfs(current.left, depth + 1)
        let right = dfs(current.right, depth + 1)
        
        if (left === null && right === null) {
            minDepth = Math.min(minDepth, depth)
        }
    }
    
    if (root === null) {return 0}
    dfs(root, 1)
    return minDepth
};

// 第二次做

var minDepth = function(root) {
    const queue = []

    if (root === null) {return 0}

    queue.push([root, 1])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current.left === null && current.right === null) {return level}

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
}

// 第三次做

var minDepth = function(root) {
    const queue = []

    if (root === null) {return 0}
    queue.push([root, 1])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current.left === null && current.right === null) {return level}

        if (current.left) {queue.puah([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
}
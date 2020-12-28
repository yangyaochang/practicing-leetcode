/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var deepestLeavesSum = function(root) {
    if (root === null) {return 0}
    
    let queue = []
    let sum = [0, 0]
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level !== sum[0]) {
            sum[0] = level
            sum[1] = 0
        }
        sum[1] += current.val
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    return sum[1]
};

var deepestLeavesSum = function(root) {
    const queue = []
    let levelSum = [0, 0]

    queue.push([root, 0])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level > levelSum[0]) {levelSum = [level, 0]}
        levelSum[1] += current.val

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }

    return levelSum[1]
}

// 第三次做

var deepestLeavesSum = function(root) {
    const queue = []
    let currentLevel = 0
    let currentSum = 0

    queue.push([root, 0])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level > currentLevel) {
            currentSum = current.val
            currentLevel = level
        }
        else {currentSum += current.val}
        

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }   

    return currentSum
}
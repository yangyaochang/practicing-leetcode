var maxLevelSum = function(root) {
    let queue = []
    let cache = {}
    let maxLevel = 0
    let maxSum = - Infinity
    let level
    
    if (root === null) {return null}
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level in cache === false) {
            cache[level] = 0
        }
        if (level > maxLevel) {maxLevel = level}
        
        cache[level] += current.val
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    for (let i = maxLevel; i >=0; i--) {
        if (cache[i] >= maxSum) {
            maxSum = cache[i]
            level = i
        }
    }
    
    return level
};
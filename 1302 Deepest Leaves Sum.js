var deepestLeavesSum = function(root) {
    let queue = []
    let sum = [0, 0]
    
    if (root === null) {return sum[1]}
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level > sum[0]) {
            sum[0] = level
            sum[1] = 0
        }
        
        sum[1] += current.val
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    return sum[1]
};
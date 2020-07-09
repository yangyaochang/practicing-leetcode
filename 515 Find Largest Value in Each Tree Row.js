var largestValues = function(root) {
    let list = []
    let queue = []
    
    if (root === null) {return []}
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (list[level - 1] === undefined) {list[level - 1] = current.val}
        else {
            if (current.val > list[level - 1]) {
                list[level - 1] = current.val
            }
        }
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    return list
};
var findBottomLeftValue = function(root) {
    if (root === null) {return null}
    
    let queue = []
    let record = [0, 0]
    
    queue.push([root, 1]) 
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (record[0] !== level) {
            record[0] = level 
            record[1] = current.val
        }

        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    return record[1]
};
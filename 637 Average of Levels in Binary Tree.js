var averageOfLevels = function(root) {
    const list = []
    const queue = []
    let curSum = 0
    let num = 0
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        const [cur, level] = queue.shift()
        
        if (level === list.length + 2) {
            list.push(curSum / num)
            curSum = 0
            num = 0
        }
        
        num++
        curSum += cur.val
        
        if (cur.left) {queue.push([cur.left, level + 1])}
        if (cur.right) {queue.push([cur.right, level + 1])}
    }
    
    list.push(curSum / num)
    return list
};
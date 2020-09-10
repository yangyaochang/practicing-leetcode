/*
其實就是 BFS 後根據 level 來 reverse
*/

var zigzagLevelOrder = function(root) {
    if (root === null) {return []}
    
    let queue = []
    let list = []
    
    queue.push([root, 0])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level === list.length) {list[level] = []}
        list[level].push(current.val)
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    for (let i = 0; i < list.length; i++) {
        if (i % 2 === 1) {list[i].reverse()}
    }
    
    return list
};

var zigzagLevelOrder = function(root) {
    const queue = []
    const list = []

    if (root === null) {return list}

    queue.push([root, 0])

    while (queue.length > 0) {
        const [cur, level] = queue.shift()

        if (level === list.length) {list.push([])}
        list[level].push(cur.val)

        if (cur.left) {queue.push([cur.left, level + 1])}
        if (cur.right) {queue.push([cur.right, level + 1])}
    }

    list.forEach((l, i) => {
        if (i % 2 === 1) {l.reverse()}
    })

    return list
}

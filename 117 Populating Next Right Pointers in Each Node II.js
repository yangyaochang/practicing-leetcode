var connect = function(root) {
    if (root === null) {return null}

    const queue = []
    let preNode = [-1, null]

    queue.push([root, 0])

    while (queue.length > 0) {
        const [cur, level] = queue.shift()

        if (preNode[0] === level) {preNode[1].next = cur}
        preNode[0] = level
        preNode[1] = cur

        if (cur.left) {queue.push([cur.left, level + 1])}
        if (cur.right) {queue.push([cur.right, level + 1])}
    }
    return root
}
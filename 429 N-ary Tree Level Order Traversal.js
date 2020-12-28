/*
Instantiate scope variable list[] to store node's value
Implement BFS wiht a queue and a while loop
Pust the root node in queue
While queue.length > 0, visite the node and push it's children to queue
return list

Time Complexity: O(n)
Space Complexity: O(n) 
*/

var levelOrder = function(root) {
    const queue = []
    const list = []

    if (root === null) {return list}

    queue.push([root, 0])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level === list.length) {list.push([])}
        list[level].push(current.val)

        const children = current.children
        children.forEach(child => {queue.push([child, level + 1])})
    }
    return list
}

var levelOrder = function(root) {
    if (root === null) {return []}
    
    let list = []
    let queue = []
    
    queue.push([root, 0])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level === list.length) {
            list.push([])
        }
        
        list[level].push(current.val)
        let children = current.children
        children.forEach(child => queue.push([child, level + 1]))
    }
    return list
};

var levelOrder = function(root) {
    const queue = []
    const list = []

    if (root === null) {return list}
    queue.push([root, 0])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (list.length === level) {list.push([])}
        list[level].push(current.val)

        current.children.forEach(node => {queue.push([node, level + 1])})
    }
    return list
}

// 第六次做

var levelOrder = function(root) {
    const list = []
    const queue = []

    if (root === null) {return list}
    queue.push([root, 0])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (list.length === level) {
            list.push([current.val])
        } else {
            list[level].push(current.val)
        }

        current.children.forEach(child => {
            if (child) {queue.push([child, level + 1])}
        })
    }

    return list
}

// 第七次做

var levelOrder = function(root) {
    const queue = []
    const list = []

    if (root === null) {return []}
    queue.push([root, 1])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level > list.length) {list.push([current.val])}
        else {list[level - 1].push(current.val)}

        current.children.forEach(child => {
            queue.push([child, level + 1])
        })
    }

    return list
}
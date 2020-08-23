/*
左子節點 index = parentIndex * 2
右子節點 index = parentIndex * 2 + 1

每到一個新 level 要歸零，不然最後 index 會太大
*/

var widthOfBinaryTree = function(root) {
    const queue = []
    let list = []
    let reset = 0
    let currentLevel = 0
    let maxWidth = 0 

    if (root === null) {return maxWidth}

    queue.push([root, 0, 0])

    while (queue.length > 0) {
        let [current, level, index] = queue.shift()

        
        if (level > currentLevel) {
            console.log(list)
            maxWidth = Math.max(maxWidth, list[list.length - 1] - list[0] + 1)
            currentLevel = level
            list = []
            reset = index
        }
        index = index - reset
        list.push(index)

        if (current.left) {queue.push([current.left, level + 1, 2 * index])}
        if (current.right) {queue.push([current.right, level + 1, 2 * index + 1])}
    }
    maxWidth = Math.max(maxWidth, list[list.length - 1] - list[0] + 1)
    
    return maxWidth
};
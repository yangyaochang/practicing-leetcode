const rightSideView = (root) => {
    if (!root) {
        return []
    } else {
        let queue = []
        let output = []
        let currentLevel = []
        let list = []
        queue.push(root)
        let length = queue.length
        
        while (length > 0) {
            for (let i = 0; i < length; i++) {
                let node = queue.shift()
                currentLevel.push(node.val)
                if (node.right) {queue.push(node.right)}
                if (node.left) {queue.push(node.left)}
            }

            list.push(currentLevel)
            currentLevel = []
            length = queue.length
        }
        list.forEach(level => {output.push(level[0])})
        return list
    }
};



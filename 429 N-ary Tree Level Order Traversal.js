/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var levelOrder = function(root) {
    let queue = []
    let list = []
    
    if (root === null) {return list}
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        if (list.length < level) {list.push([])}
        list[level - 1].push(current.val)
        
        let children = current.children
        for (let i = 0; i < children.length; i++) {
            queue.push([children[i], level + 1])
        }
    }
    
    return list
};
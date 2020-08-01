/*
Time Complexity: O(n)
Space Complexity: O(n) to keep the output structure which contains n node values.
*/

var levelOrderBottom = function(root) {
    let list = []
    if (root === null) {return list}
    
    let queue = []
    queue.push([root, 0])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level === list.length) {
            list.push([])
        }
        
        list[level].push(current.val)
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    return list.reverse()
};
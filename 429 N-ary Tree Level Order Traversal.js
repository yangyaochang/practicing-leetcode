/*
Time Complexity: O(n)
Space Complexity: O(n) => 我覺得 n 是單一 level 最多的 node 數目
但官方答案是：
At most, the queue will have 2 layers of the tree on it at any given time. 
In the worst case, this is all of the nodes. In the best case, it is just 1 node 
(if we have a tree that is equivalent to a linked list).
*/

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
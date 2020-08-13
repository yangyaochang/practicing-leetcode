/*
要同時往下與往上找距離，所以把 tree 轉成 graph
*/

var distanceK = function(root, target, K) {
    const graph = {}
    
    const dfs = (current) => {
        if (current === null) {return}
        
        if (current === root) {
            if (current.left) {
                graph[current.val] = [current.left.val]
                if (current.right) {graph[current.val].push(current.right.val)}
            } else {
                if (current.right) {graph[current.val] = [current.right.val]}
                else {graph[current.val] = []}
            }
        } else {
            if (current.left) {graph[current.val].push(current.left.val)}
            if (current.right) {graph[current.val].push(current.right.val)}
        }

        if (current.left) {graph[current.left.val] = [current.val]}
        if (current.right) {graph[current.right.val] = [current.val]}
        
        dfs(current.left)
        dfs(current.right)
    }
    
    dfs(root)
    
    const queue = []
    const visited = new Set()
    const list = []
    
    queue.push([target.val, 0])
    visited.add(target.val)
    
    while (queue.length > 0) {
        const [current, level] = queue.shift()
        
        if (level === K) {
            list.push(current)
        }
        if (level > K) {return list}
        
        const neighbors = graph[current]
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                queue.push([neighbors[i], level + 1])
                visited.add(neighbors[i])
            }
        }
    }
    return list
};
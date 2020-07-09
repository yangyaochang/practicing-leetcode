/*
JavaScript Object 的 key 只能是 string，所以用 node.val 來存

*/

var cloneGraph = function(node) {
    let visited = {}
    
    if (node === null) {return null}
    
    const dfs = (current) => {
        if (current.val in visited) {return visited[current.val]}
        
        let clonedNode = new Node(current.val)
        visited[current.val] = clonedNode
        
        let neighbors = current.neighbors
        for (let i = 0; i < neighbors.length; i++) {
            clonedNode.neighbors.push(dfs(neighbors[i]))
        }
        return clonedNode
    }
    
    return dfs(node)
};
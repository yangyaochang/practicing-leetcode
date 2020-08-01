/*
JavaScript Object 的 key 只能是 string，所以用 node.val 來存

*/

var cloneGraph = function(node) {
    let visited = {}
    if (node === null) {return null}
    
    const dfs = (current) => {
        if (current.val in visited) {return visited[current.val]}
        if (current === null) {return null}
        
        let newNode = new Node(current.val)
        visited[current.val] = newNode
        
        current.neighbors.forEach(neighbor => {
            newNode.neighbors.push(dfs(neighbor))
        })

        return newNode
    }

    return dfs(node)
};
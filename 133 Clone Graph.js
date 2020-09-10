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

/* 
第二次做
重點在於用 visited 儲存已經 created 的 node 
*/
var cloneGraph = function(node) {
    const visited = {}

    const dfs = (current) => {
        if (current === null) {return null}
        if (current.val in visited) {return visited[current.val]}

        const newNode = new Node(current.val)
        visited[current.val] = newNode

        const neighbors = current.neighbors
        for (let i = 0; i < neighbors.length; i++) {
            newNode.neighbors.push(dfs(neighbors[i]))
        }
        return newNode
    }

    return dfs(node)
}

/*
第三次做
if (cur === null) {return null} 的 base case 不要忘了
如果 graph 裡的值都是唯一的，可以用 object 取代 map 的功能
*/

var cloneGraph = function(node) {
    const cache = new Map()

    const clone = (cur) => {
        if (cache.has(cur)) {return cache.get(cur)}
        if (cur === null) {return null}

        const node = new Node(cur.val)
        const neighbors = cur.neighbors
        cache.set(cur, node)

        for (let i = 0; i < neighbors.length; i++) {
            node.neighbors.push(clone(neighbors[i]))
        }
        return node
    }

    return clone(node)
}
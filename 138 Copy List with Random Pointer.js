/*
若有重複的 value 會出錯，所以 visited 用 map，map 的 key 值不僅限於 string

Time Complexity: O(n)
Space Complexity: O(n)
*/

var copyRandomList = function(head) {
    let visited = new Map()
    if (head === null) {return null}
    
    const dfs = (current) => {
        if (current === null) {return null}
        if (visited.has(current)) {return visited.get(current)}
        
        let newNode = new Node(current.val)
        visited.set(current, newNode)
        
        newNode.next = dfs(current.next)
        newNode.random = dfs(current.random)
        
        return newNode
    }
    
    return dfs(head)
};

/*
用 next 走訪一遍 list 會建立好所以的 node 並存在 cache 裡，之後再以 random 調用遞迴時就可以直接存取已經建立的 nodes
*/

var copyRandomList = function(head) {
    const cache = new Map()
    
    const build = (current) => {
        if (current === null) {return null}
        if (cache.has(current)) {return cache.get(current)}
        
        const newNode = new Node(current.val)
        cache.set(current, newNode)
        
        newNode.next = build(current.next)
        newNode.random = build(current.random)
        return newNode
    }
    
    return build(head)
};

// 第三次做

var copyRandomList = function(head) {
    const cache = new Map()
    
    const copy = (cur) => {
        if (cur === null) {return null}
        if (cache.has(cur)) {return cache.get(cur)}

        const node = new Node(cur.val)
        cache.set(cur, node)

        node.next = copy(cur.next)
        node.random = copy(cur.random)

        return node
    }

    return copy(head)
};

// 第四次做

var copyRandomList = function(head) {
    const visited = new Map()

    const dfs = (cur) => {
        if (cur === null) {return null}
        if (visited.has(cur)) {return visited.get(cur)} 

        const node = new Node(cur.val)
        visited.set(cur, node)

        node.next = dfs(cur.next)
        node.random = dfs(cur.random)
        return node
    }

    return dfs(head)
}

// 第五次做

var copyRandomList = function(head) {
    const cache = new Map()

    const traverse = (current) => {
        if (current === null) {return null}
        if (cache.has(current)) {return cache.get(current)}

        const node = new Node(current.val)
        cache.set(current, node)

        node.next = traverse(current.next)
        node.random = traverse(current.random)

        return node
    }

    return traverse(head)
}
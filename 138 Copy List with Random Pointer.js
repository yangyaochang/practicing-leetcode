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
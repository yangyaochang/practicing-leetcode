var findFrequentTreeSum = function(root) {
    let cache = {}
    let list = []
    
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let subSum = dfs(current.left) + dfs(current.right) + current.val
        
        if (subSum in cache) {
            cache[subSum]++
        } else {
            cache[subSum] = 1
        }
        
        return subSum
    }
    
    dfs(root)
    
    let keys = Object.keys(cache)
    let maxFrequency = 0
    
    keys.forEach(key => {
        maxFrequency = Math.max(maxFrequency, cache[key])
    })
    
    list = keys.filter(key => cache[key] === maxFrequency)
    
    return list  
};
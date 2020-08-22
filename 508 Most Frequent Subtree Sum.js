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

// 第二次做

var findFrequentTreeSum = function(root) {
    const cache = {}
    
    const dfs = (cur) => {
        if (cur === null) {return null}
        
        let left = dfs(cur.left)
        let right = dfs(cur.right)
        
        if (left === null && right === null) {
            if (cur.val in cache) {cache[cur.val]++}
            else {cache[cur.val] = 1}
            return cur.val
        } else {
            if (left === null) {left = 0}
            if (right === null) {right = 0} 
            const sum = left + right + cur.val
            
            if (sum in cache) {cache[sum]++}
            else {cache[sum] = 1}
            return sum
        }
    }
    dfs(root)
    const maxFrequency = Math.max(...Object.values(cache))
    const keys = Object.keys(cache)
    let list = []
    
    for (let i = 0; i < keys.length; i++) {
        if (cache[keys[i]] === maxFrequency) {list.push(keys[i])}
    }
    return list
};
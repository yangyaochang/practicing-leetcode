/*
嘗試各種左右子樹節點數的組合，再各種組合下嘗試各種結構的組合
*/

var allPossibleFBT = function(N) {
    if (N % 2 === 0) {return []}
    let cache = {
        1: [new TreeNode(0)]
    }
    
    const helper = (n) => {
        if (n in cache) {return cache[n]}
        
        cache[n] = []
        
        for (let i = 1; i < n; i += 2) {
            let j = n - 1 - i
            
            let left = helper(i)
            let right = helper(j)
            
            for (let p = 0; p < left.length; p++) {
                for (let q = 0; q < right.length; q++) {
                    cache[n].push(new TreeNode(0, left[p], right[q]))
                }
            }
        }
        return cache[n]
    }
    
    helper(N)
    return cache[N]
};
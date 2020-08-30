var numSquarefulPerms = function(A) {
    let count = 0
    const used = new Array(A.length)
    used.fill(false)
    
    A.sort((a, b) => a - b)
    
    const findPermutations = (path) => {
        if (path.length === A.length) {
            for (let i = 0; i < path.length - 1; i++) {
                if ( Math.pow(path[i] + path[i + 1], 1 / 2) % 1 !== 0) {return}
            }
            count++
            return
        }
        
        for (let i = 0; i < A.length; i++) {
            if (used[i]) {continue}
            if (i > 0 && used[i - 1] === false && A[i] === A[i - 1]) {continue}
            
            used[i] = true
            path.push(A[i])
            findPermutations(path)
            path.pop()
            used[i] = false
        }
    }
    
    findPermutations([])
    return count
};
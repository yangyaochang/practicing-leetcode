var pseudoPalindromicPaths  = function(root) {
    let num = 0
    
    const dfs = (current, path) => {
        if (current === null) {return null}
        
        path += current.val
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)
        
        if (left === null && right === null) {
            num += (isPalindromic(path)) ? 1 : 0
        }
    }
    
    if (root === null) {return 0}
    else {
        dfs(root, '')
        return num
    }

    function isPalindromic(str) {
        let cache = {}
        let oddNum = 0

        for (let i = 0; i < str.length; i++) {
            if (str[i] in cache) {
                cache[str[i]]++
            } else {
                cache[str[i]] = 1
            }
        }

        let keys = Object.keys(cache)

        for (let i = 0; i < keys.length; i++) {
            if (cache[keys[i]] % 2 === 1) {oddNum++}
        }

        return oddNum <= 1
    }
};
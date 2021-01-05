/*
樹狀結構 DFS 的 recursion，call stack 不會是 O(n) 而是 O(H)，或 O(logn)，H 為樹高，不會所有的 node 同時被 called。
*/

var longestUnivaluePath = function(root) {
    let longestPath = 0
    
    if (root === null) {return longestPath}
    
    const dfs = (current) => {
        if (current === null) {return [null, null]}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left[0] === current.val && right[0] === current.val) {
            longestPath = Math.max(longestPath, left[1] + right[1])
            return [current.val, Math.max(left[1], right[1]) + 1]
        }
        if (left[0] === current.val) {
            longestPath = Math.max(longestPath, left[1])
            return [current.val, left[1] + 1]
        }
        if (right[0] === current.val) {
            longestPath = Math.max(longestPath, right[1])
            return [current.val, right[1] + 1]
        }
        return [current.val , 1]
    }
    
    dfs(root)
    return longestPath
};

var longestUnivaluePath = function(root) {
    let maxLength = 0

    const dfs = (cur) => {
        if (cur === null) {return [null, 0]}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        if (left[0] === null && right[0] === null) {return [cur.val, 1]}
        if (left[0] === cur.val && right[0] === cur.val) {
            maxLength = Math.max(maxLength, left[1] + right[1])
            return [cur.val, 1 + Math.max(left[1], right[1])]
        }
        if (left[0] === cur.val) {
            maxLength = Math.max(maxLength, left[1])
            return [cur.val, 1 + left[1]]
        }
        if (right[0] === cur.val) {
            maxLength = Math.max(maxLength, right[1])
            return [cur.val, 1 + right[1]]
        }
        return [cur.val, 1]
    }

    dfs(root)
    return maxLength
};

// 第三次做

var longestUnivaluePath = function(root) {
    let longest = 0

    const dfs = (cur) => {
        if (cur === null) {return [null, 0]}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        if (left[0] === cur.val && right[0] === cur.val) {
            longest = Math.max(longest, left[1] + right[1])
            return [cur.val, Math.max(left[1], right[1]) + 1]
        }
        if (left[0] === cur.val) {
            longest = Math.max(longest, left[1])
            return [cur.val, left[1] + 1]
        }
        if (right[0] === cur.val) {
            longest = Math.max(longest, right[1])
            return [cur.val, right[1] + 1]
        }
        return [cur.val, 1]
    }

    dfs(root)
    return longest
}

// 第四次做

var longestUnivaluePath = function(root) {
    let length = 0

    const dfs = (current) => {
        if (current === null) {return [null, null]}

        let left = dfs(current.left)
        let right = dfs(current.right)

        if (left[0] === current.val && right[0] === current.val) {
            length = Math.max(length, left[1] + right[1])
            return [current.val, Math.max(left[1], right[1]) + 1]
        }
        if (left[0] === current.val) {
            length = Math.max(length, left[1])
            return [current.val, left[1] + 1]
        }
        if (right[0] === current.val) {
            length = Math.max(length, right[1])
            return [current.val, right[1] + 1]
        }
        return [current.val, 1]
    }

    dfs(root)
    return length
}
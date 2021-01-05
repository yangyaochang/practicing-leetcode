/*
Time Complexity: O(n)
Space Complexity: O(n) => unbalanced tree 跟每一個 node 值都不相同，list 的長度等於 node 數目 
*/

var findMode = function(root) {
    let list = []
    let preValue = null
    let count = 0
    let maxFrequency = 0
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        
        if (preValue !== current.val) {
            preValue = current.val
            count = 1
        } else if (preValue === current.val) {
            count ++
        }
        
        if (count > maxFrequency) {
            maxFrequency = count
            list = [current.val]
        } else if (count === maxFrequency) {
            list.push(current.val)
        }
        
        dfs(current.right)
    }
    
    dfs(root)
    return list
};

// 可以 inorder traversal 變成 sorted array，當作在 sorted array 裡面找出現頻率最高的值

var findMode = function(root) {
    let nums = []
    
    const dfs = (cur) => {
        if (cur === null) {return}

        dfs(cur.left)
        nums.push(cur.val)
        dfs(cur.right)
    }

    dfs(root)
    if (nums.length === 0) {return []}
    let preVal = nums[0]
    let count = 1
    let maxFrequency = 1
    let list = []

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === preVal) {
            count++
        } else {
            if (count === maxFrequency) {
                list.push(preVal)
            } else if (count > maxFrequency) {
                maxFrequency = count
                list = [preVal]
            }
            preVal = nums[i]
            count = 1
        }
    }

    if (count === maxFrequency) {
        list.push(preVal)
    } else if (count > maxFrequency) {
        maxFrequency = count
        list = [preVal]
    }

    return list
};

// 用 for...in loop iterate through object

var findMode = function(root) {
    const frequency = {}

    const dfs = (cur) => {
        if (cur === null) {return}

        dfs(cur.left)
        if (cur.val in frequency) {
            frequency[cur.val]++
        } else {
            frequency[cur.val] = 1
        }
        dfs(cur.right)
    }

    dfs(root)
    let maxFrequency = 0
    let list = []
    
    for (let val in frequency) {
        if (frequency[val] > maxFrequency) {
            maxFrequency = frequency[val]
            list = [val]
        } else if (frequency[val] === maxFrequency) {
            list.push(val)
        }
    }
    return list
}

/*
之前使用 object 來記錄 frequency 的方式 Space Complexity 會是 O(n)
下面利用固定的變數來判斷是否需要 push 到 陣列裡可以壓縮 Space Complexity，因為沒有記錄每一個值出現的次數
*/

var findMode = function(root) {
    let modes = []
    let preVal = null
    let frequency = 0
    let maxFrequency = 0

    const dfs = (cur) => {
        if (cur === null) {return}

        dfs(cur.left)
        if (preVal === null) {
            preVal = cur.val
            frequency++
            maxFrequency++
            modes.push(cur.val)
        } else {
            if (cur.val === preVal) {
                frequency++
                if (frequency > maxFrequency) {
                    maxFrequency = frequency
                    modes = [cur.val]
                } else if (frequency === maxFrequency) {
                    modes.push(cur.val)
                }
            } else {
                preVal = cur.val
                frequency = 1
                if (frequency === maxFrequency) {
                    modes.push(cur.val)
                }
            }
        }
        dfs(cur.right)
    }

    dfs(root)
    return modes
}
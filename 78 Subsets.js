/*
陷阱是 array 是 passed by reference，不要不小心一直用到同一個 array
*/

var subsets = function(nums) {
    let list = []

    const push = (pointer, set) => {
        if (pointer === nums.length) {
            list.push(set)
            return
        }

        let num = nums[pointer]
        push(pointer + 1, [...set])
        set.push(num)
        push(pointer + 1, set)
    }

    push(0, [])
    return list
};

// 第二次做

var subsets = function(nums) {
    const list = []

    const dfs = (nums, path) => {
        if (nums.length === 0) {
            list.push([...path])
            return
        }

        const num = nums.pop()
        dfs(nums, path)
        path.push(num)
        dfs(nums, path)
        path.pop()
        nums.push(num)
    }

    dfs(nums, [])
    return list
};

/* 
第三次做用求 Combination 方法
*/

var subsets = function(nums) {
    const list = []

    const findSubsets = (path, start) => {
        if (start === nums.length) {
            list.push([...path])
            return
        }

        list.push([...path])
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            findSubsets(path, i + 1)
            path.pop()
        }
    }

    findSubsets([], 0)
    return list
};

const nums = [-1,1,2]

console.log(subsets(nums))

// 第四次做

var subsets = function(nums) {
    const list = []
    
    const findSubsets = (path, start) => {
        if (start === nums.length) {
            list.push([...path])
            return
        }

        list.push([...path])
        
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            findSubsets(path, i + 1)
            path.pop()
        }
    }

    findSubsets([], 0)
    return list
}

const nums = [1,2,3]

console.log(subsets(nums))
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

const nums = [-1,1,2]

console.log(subsets(nums))
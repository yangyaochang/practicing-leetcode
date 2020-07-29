var permuteUnique = function(nums) {
    const list = []
    nums.sort((a, b) => a - b)

    const dfs = (path, used) => {
        if (path.length === nums.length) {
            list.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {continue}
            if (used[i - 1] && nums[i] === nums[i - 1] && i > 0) {continue}
            // 不重複使用重複的元素

            used[i] = true
            path.push(nums[i])
            dfs(path, used)
            used[i] = false
            path.pop()
        }
    }

    dfs([], new Array(nums.length))
    return list
};

const nums = [1,1,2]

console.log(permuteUnique(nums))
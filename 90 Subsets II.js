/*
Time Complexity:
Space Complexity:
*/

var subsetsWithDup = function(nums) {
    const list = []
    nums.sort((a, b) => a - b)

    const dfs = (path, start) => {
        if (start === nums.length) {
            list.push([...path])
            return
        }
        
        list.push([...path])

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {continue}

            path.push(nums[i])
            dfs(path, i + 1)
            // 是 i + 1 不是 start + 1
            path.pop()
        }
    }

    dfs([], 0)
    return list
};

const nums = [1,2,2]

console.log(subsetsWithDup(nums))
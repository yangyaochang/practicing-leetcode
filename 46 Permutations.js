/*
Time Complexity: O(n!)
Space Complexity: O(n!)
*/

var permute = function(nums) {
    const list = []

    const dfs = (path, numsLeft) => {
        if (numsLeft.length === 0) {
            list.push([...path])
            return
        }

        for (let i = 0; i < numsLeft.length; i++) {
            const num = numsLeft[i]
            path.push(num)
            numsLeft.splice(i, 1)
            dfs(path, numsLeft)
            numsLeft.splice(i, 0, num)
            path.pop()
        }

    }

    dfs([], nums)
    return list
};

// 第二次做，第一次用 Set 紀錄 used 也不錯

var permute = function(nums) {
    const list  = []
    const used = new Array(nums.length)

    const findPermutations = (path, used) => {
        if (path.length === nums.length) {
            list.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] === true) {continue}

            used[i] = true
            path.push(nums[i])
            findPermutations(path, used)
            used[i] = false
            path.pop()
        }
    }

    findPermutations([], used)
    return list
};

const nums = [1,2,3]

console.log(permute(nums))

// 第三次做

var permute = function(nums) {
    const list = []
    const used = new Array(nums.length)
    used.fill(false)

    const findPermutations = (path, used) => {
        if (path.length === nums.length) {
            list.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {continue}
            used[i] = true
            path.push(nums[i])
            findPermutations(path, used)
            path.pop()
            used[i] = false
        }
    }

    findPermutations([], used)
    return list
}
/*
Time Complexity: 
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

// 第四次做

var permute = function(nums) {
    const list = []
    const used = new Array(nums.length).fill(false)

    const append = (path, used) => {
        if (path.length === nums.length) {
            list.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] === true) {continue}
            used[i] = true
            path.push(nums[i])
            append(path, used)
            path.pop()
            used[i] = false
        }
    }

    append([], used)
    return list
}

// 第五次做

var permute = function(nums) {
    const list = []
    const used = new Array(nums.length).fill(false)

    const findPermutations = (path) => {
        if (path.length === nums.length) {
            list.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] === true) {continue}
            path.push(nums[i])
            used[i] = true
            findPermutations(path)
            used[i] = false
            path.pop()
        }
    }

    findPermutations([])
    return list
}

// 第六次做

var permute = function(nums) {
    const list = []
    const used = new Array(nums.length).fill(false)

    const findPermutations = (path) => {
        if (path.length === nums.length) {
            list.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {continue}

            path.push(nums[i])
            used[i] = true
            findPermutations(path)
            path.pop()
            used[i] = false
        }
    }

    findPermutations([])
    return list
}

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

const nums = [1,2,3]

console.log(permute(nums))
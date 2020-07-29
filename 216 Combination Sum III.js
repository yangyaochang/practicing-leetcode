/*
Time Complexity:
Space Complexity:
*/

var combinationSum3 = function(k, n) {
    const list = []

    const dfs = (path, sum, start) => {
        if (sum === n && path.length === k) {
            list.push([...path])
            return
        }
        if (path.length > k) {return}
        if (sum > n) {return}

        for (let i = start; i < 10; i++) {
            path.push(i)
            dfs(path, sum + i, i + 1)
            path.pop()
        }
    }

    dfs([], 0, 1)
    return list
};

const k = 3
const n = 7

console.log(combinationSum3(k, n))
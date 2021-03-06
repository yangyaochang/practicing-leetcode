/*
candidates.sort((a, b) => a - b) 先排序很重要，後面可以判斷避免使用到重複的元素
*/

var combinationSum2 = function(candidates, target) {
    const list = []
    candidates.sort((a, b) => a - b)

    const dfs = (sum, path, start) => {
        if (sum === target) {
            list.push([...path])
            return
        }
        if (sum > target) {return}
        if (start === candidates.length) {return}

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {continue}
            // 避免使用到重複的元素
            const num = candidates[i]
            path.push(num)
            dfs(sum + num, path, i + 1)
            path.pop()
        }
    }

    dfs(0, [], 0)
    return list
};

const candidates = [10,1,2,7,6,1,5]
const target = 8

console.log(combinationSum2(candidates, target))

// 第二次做

var combinationSum2 = function(candidates, target) {
    const list = []
    candidates.sort((a, b) => a - b)

    const add = (path, sum, start) => {
        if (sum > target) {return}
        if (sum === target) {
            list.push([...path])
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {continue}
            path.push(candidates[i])
            add(path, sum + candidates[i], i + 1)
            path.pop()
        }
    }

    add([], 0, 0)
    return list
};

// 第三次做

var combinationSum2 = function(candidates, target) {
    const list = []
    candidates.sort((a, b) => a - b)

    const findCombinations = (path, curSum, start) => {
        if (curSum === target) {
            list.push([...path])
            return 
        }
        if (curSum > target || start === candidates.length) {return}

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {continue}
            path.push(candidates[i])
            findCombinations(path, curSum + candidates[i], i + 1)
            path.pop()
        }
    }

    findCombinations([], 0, 0)
    return list
}

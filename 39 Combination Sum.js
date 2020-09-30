/*
Time Complexity: 
為 n 叉樹的節點數，n 為 the size of candidates array
樹高為 target / min value in candidates，考慮每次都加最小值
節點數 = 1 + n + n ^ 2 + .... + n ^ (target / min)
等比級數和公式 = a0(1 - r ^ (n)) / 1 - r
所以節點數為 (1 - n ^ ((target / min) + 1)) / 1 - n

Space Complexity: O(target / min)
*/

var combinationSum = function(candidates, target) {
    const list = []

    const findCombinations = (path, curSum, start) => {
        if (curSum > target) {return}
        if (curSum === target) {
            list.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            findCombinations(path, curSum + candidates[i], i)
            path.pop()
        }
    }

    findCombinations([], 0, 0)
    return list
}

const candidates = [2,3,6,7]
const target = 7

console.log(combinationSum(candidates, target))

/*
有點像 coin sum，如果順序不重要，可以用選擇要不要用來縮小 problem size
*/

var combinationSum = function(candidates, target) {
    let list = []

    const choose = (nums, used, target) => {
        if (nums.length === 0) {return}
        if (target < 0) {return}
        if (target === 0) {
            list.push([...used])
            return
        }

        let temp = [...nums]
        let x = nums.pop()
        choose(nums, used, target)

        // 做選擇
        used.push(x)
        choose(temp, used, target - x)
        // 取消選擇
        used.pop()
    }

    choose(candidates, [], target)
    return list
};

/* 
第二次做
Time Complexity: O(2^n)
Space Complexity: O(n)
*/
var combinationSum = function(candidates, target) {
    const list = []
    
    const dfs = (sum, path, candidates) => {
        if (sum === target) {
            list.push([...path])
            return
        }
        if (candidates.length === 0) {return}
        if (sum > target) {return}

        const temp = [...candidates]
        const num = candidates.pop()
        path.push(num)
        dfs(sum + num, path, temp)
        path.pop()
        dfs(sum, path, candidates)
    }

    dfs(0, [], candidates)
    return list
};

/*
第三次做

Time Complexity:
Space Complexity:
*/

var combinationSum = function(candidates, target) {
    const list = []
    
    const choose = (path, curSum, start) => {
        if (curSum > target) {return}
        if (curSum === target) {
            list.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            choose(path, curSum + candidates[i], i)
            path.pop()
        }
    }

    choose([], 0, 0)
    return list
}

const candidates = [2,3,6,7]
const target = 7

console.log(combinationSum(candidates, target))

// 第四次做

var combinationSum = function(candidates, target) {
    const list = []

    const sum = (path, curSum, start) => {
        if (curSum > target) {return}
        if (curSum === target) {
            list.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            sum(path, curSum + candidates[i], i)
            path.pop()
        }
    }

    sum([], 0, 0)
    return list
};

// 第五次做

var combinationSum = function(candidates, target) {
    const list = []
    
    const add = (path, sum, start) => {
        if (sum > target) {return}
        if (sum === target) {
            list.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            add(path, sum + candidates[i], i)
            path.pop()
        }
    }

    add([], 0, 0)
    return list
}
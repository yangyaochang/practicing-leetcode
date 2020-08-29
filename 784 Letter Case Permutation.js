/*
Time Complexity: O(2^n)
Space Complexity: O(2^n)
*/

var letterCasePermutation = function(S) {
    const list = []

    const dfs = (path, index) => {
        if (index === S.length) {
            list.push(path)
            return
        }

        if (/[a-zA-Z]/.test(S[index])) {
            dfs(path + S[index].toUpperCase(), index + 1)
            dfs(path + S[index].toLowerCase(), index + 1)
        } else {
            dfs(path + S[index], index + 1)
        }
    }

    dfs('', 0)
    return list
};

// 第二次做
// 是 String 就不需要 backtracking

var letterCasePermutation = function(S) {
    const list = []

    const construct = (path, index) => {
        if (index === S.length) {
            list.push(path.join(''))
            return
        }

        if (/[a-zA-Z]/.test(S[index])) {
            path.push(S[index].toUpperCase())
            construct(path, index + 1)
            path.pop()
            path.push(S[index].toLowerCase())
            construct(path, index + 1)
            path.pop()
        } else {
            path.push(S[index])
            construct(path, index + 1)
            path.pop()
        }
    }

    construct([], 0)
    return list
};

const  S = "a1b2"

console.log(letterCasePermutation(S))

// 第三次做

var letterCasePermutation = function(S) {
    const list  = []

    const construct = (path, index) => {
        if (index === S.length) {
            list.push(path.join(''))
            return
        }

        if (/[a-zA-Z]/.test(S[index])) {
            path.push(S[index].toUpperCase())
            construct(path, index + 1)
            path.pop()
            path.push(S[index].toLowerCase())
            construct(path, index + 1)
            path.pop()
        } else {
            path.push(S[index])
            construct(path, index + 1)
            path.pop()
        }
    }

    construct([], 0)
    return list
};
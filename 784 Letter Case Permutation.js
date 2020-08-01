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

const  S = "a1b2"

console.log(letterCasePermutation(S))
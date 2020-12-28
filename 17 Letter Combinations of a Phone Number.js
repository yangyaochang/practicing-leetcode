/*
Time Complexity: O(3^n + 4^m) => 遞迴的 time complexity 等於 num of cases * time complexity of one case
Space Complexity: O(3^n + 4^m) => since one has to keep 3^n + 4^m solutions.
*/ 

var letterCombinations = function(digits) {
    const cache = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    const list = []

    const dfs = (index, path) => {
        if (index === digits.length) {
            list.push(path)
            return
        }

        const chars = cache[digits[index]]
        chars.forEach(char => {
            dfs(index + 1, path + char)
        })
    }

    dfs(0, '')
    return list
};

// 第二種做法傳的是一個 array

var letterCombinations = function(digits) {
    const cache = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    const list = []

    if (digits === '') {return list}
    const dfs = (index, path) => {
        if (index === digits.length) {
            list.push(path.join(''))
            return
        }

        const chars = cache[digits[index]]
        chars.forEach(char => {
            path.push(char)
            dfs(index + 1, path)
            path.pop()
        })
    }

    dfs(0, [])
    return list
};

const digits = '23'

console.log(letterCombinations(digits))

// 第三次做 

var letterCombinations = function(digits) {
    const dictionary = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    const list = []
    if (digits === '') {return list}

    const findCombinations = (str, index) => {
        if (index === digits.length) {
            list.push(str)
            return
        }

        const options = dictionary[digits[index]]
        options.forEach(letter => {
            findCombinations(str + letter, index + 1)
        })
    }

    findCombinations('', 0)
    return list
};

// It seems like way too many times

var letterCombinations = function(digits) {
    const dict = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    const list = []

    const combineLeters = (str, index) => {
        if (index === digits.length) {
            list.push(str)
            return
        }

        const letters = dict[digits[index]]
        for (let i = 0; i < letters.length; i++) {
            combineLeters(str + letters[i], index + 1)
        }
    }

    if (digits === '') {return list}
    combineLeters('', 0)
    return list
}

const digits = '23'

console.log(letterCombinations(digits))

// 第五次做

var letterCombinations = function(digits) {
    const dict = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    const list = []

    const findCombinations = (path, index) => {
        if (index === digits.length) {
            list.push(path)
            return
        }

        dict[digits[index]].forEach(num => {
            findCombinations(path + num, index + 1)
        })
    }

    if (digits === '') {return list}
    findCombinations('', 0)
    return list
}
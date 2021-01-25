/*
從搜尋一個字變搜尋多個字，我用一個 hash table 避免每次要線性查找這個開頭字母是否存在
*/

var findWords = function(board, words) {
    const cache = {}
    const check = new Set()

    for (let i = 0; i < words.length; i++) {
        check.add(words[i])
        if (words[i][0] in cache) {
            cache[words[i][0]].push(words[i])
        } else {
            cache[words[i][0]] = [words[i]]
        }
    }

    const visited = new Set()
    const list = []

    const search = (r, c, index, word) => {
        const position = `${r}_${c}`
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) {return}
        if (check.has(word) === false) {return}
        if (visited.has(position)) {return}
        if (board[r][c] !== word[index]) {return}
        if (index === word.length - 1) {
            list.push(word)
            check.delete(word)
            return
        }

        visited.add(position)
        search(r + 1, c, index + 1, word)
        search(r - 1, c, index + 1, word)
        search(r, c + 1, index + 1, word)
        search(r, c - 1, index + 1, word)
        visited.delete(position)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] in cache) {
                cache[board[i][j]].forEach(word => {
                    search(i, j, 0, word)
                })
            }
        }
    }
    return list
};

const board = [["a","b"],["a","a"]]
const words = ["aba","baa","bab","aaab","aaa","aaaa","aaba"]

console.log(findWords(board, words))

// 第二次做

var findWords = function(board, words) {
    const cache = {}
    const list = []
    const visited = new Set()
    const found = new Set()

    words.forEach(word => {
        if (word[0] in cache) {
            cache[word[0]].push(word)
        } else {
            cache[word[0]] = [word]
        }
    })

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] in cache) {
                cache[board[i][j]].forEach((word, index) => {
                    if (find(word, i, j)) {
                        cache[board[i][j]].splice(index, 1)
                    }
                })
            }
        }
    }

    return list

    function find(word, r, c) {

        const dfs = (r, c, index) => {
            const position = `${r}_${c}`
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) {return false}
            if (visited.has(position)) {return false}
            if (board[r][c] !== word[index]) {return false}
            if (index === word.length - 1 && word[index] === board[r][c]) {
                if (found.has(word) === false) {
                    list.push(word)
                    found.add(word)
                }
                return true
            }
            

            visited.add(position)
            let down = dfs(r + 1, c, index + 1)
            let up = dfs(r - 1, c, index + 1)
            let right = dfs(r, c + 1, index + 1)
            let left = dfs(r, c - 1, index + 1)
            visited.delete(position)
            return up || down || right || left
        }

        return dfs(r, c, 0)
    }
}

const board = [["a","b"],["a","a"]]

const words = ["aba","baa","bab","aaab","aaa","aaaa","aaba"]

console.log(findWords(board, words))

// 這一次的做法 Time Complexity 與 Space Complexity 表現最好，之前做法都太複雜了

var findWords = function(board, words) {
    const visited = new Set()
    const found = new Set()
    const list = []

    const find = (r, c, i, w) => {
        const position = `${r}_${c}`
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {return false}
        if (board[r][c] !== w[i]) {return false}
        if (visited.has(position)) {return false}
        if (i === w.length - 1 && board[r][c] === w[i]) {return true}

        visited.add(position)
        const returnVal = find(r + 1, c, i + 1, w) || find(r - 1, c, i + 1, w) || find(r, c + 1, i + 1, w) || find(r, c - 1, i + 1, w)
        visited.delete(position)
        return returnVal
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < board.length; j++) {
            for (let k = 0; k < board[0].length; k++) {
                if (find(j, k, 0, words[i]) && !found.has(words[i])) {
                    list.push(words[i])
                    found.add(words[i])
                }
            }
        }
    }

    return list
}
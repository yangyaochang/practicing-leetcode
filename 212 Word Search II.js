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
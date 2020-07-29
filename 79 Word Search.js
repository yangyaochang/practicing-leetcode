/*
Time Complexity: O(m * n * (4 ^ l)) => l = the length of the word, m, n 是 board 的長寬
Space Complexity: O(m * n + l)
*/

var exist = function(board, word) {
    const visited = new Set()
    let found = false
    
    const dfs = (row, col, index) => {
        const position = `${row}_${col}`
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {return}
        if (word[index] !== board[row][col]) {return}
        if (visited.has(position)) {return}
        if (index === word.length - 1 && word[index] === board[row][col]) {
            found = true
            return
        }

        visited.add(position)
        dfs(row + 1, col, index + 1)
        dfs(row - 1, col, index + 1)
        dfs(row, col + 1, index + 1)
        dfs(row, col - 1, index + 1)
        visited.delete(position)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {dfs(i, j, 0)}
        }
    }

    return found
};

const board = [['A','B','C','E'],
                ['S','F','C','S'],
                ['A','D','E','E']]
const word = "ABCB"

console.log(exist(board, word))

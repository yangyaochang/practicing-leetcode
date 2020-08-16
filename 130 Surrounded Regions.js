var solve = function(board) {
    const visited = new Set()

    const surrounded = (r, c) => {
        const position = `${r}_${c}`
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) {return false}
        if (board[r][c] === 'X' || visited.has(position)) {return true}

        visited.add(position)
        let down = surrounded(r + 1, c)
        let up = surrounded(r - 1, c)
        let right = surrounded(r, c + 1)
        let left = surrounded(r, c - 1)

        return down && up && right && left
    }

    const flip = (r, c) => {
        if (board[r][c] === 'X') {return}

        board[r][c] = 'X'
        flip(r + 1, c)
        flip(r - 1, c)
        flip(r, c + 1)
        flip(r, c - 1)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const position = `${i}_${j}`
            if (board[i][j] === 'O' && visited.has(position) === false) {
                if (surrounded(i, j)) {
                    flip(i, j)
                }
            }
        }
    }
    return board
};

const board = [["O","O","O","O","X","X"],
            ["O","O","O","O","O","O"],
            ["O","X","O","X","O","O"],
            ["O","X","O","O","X","O"],
            ["O","X","O","X","O","O"],
            ["O","X","O","O","O","O"]]

console.log(solve(board))
var gameOfLife = function(board) {
    let rowMax = board.length - 1
    let colMax = board[0].length - 1

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 0 && liveNeighbors(i, j) === 3) {
                board[i][j] = -1
                // > 0 === live
            }
        }
    }
    console.log(board)

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1 && (liveNeighbors(i, j) < 2 || liveNeighbors(i, j) > 3)) {
                board[i][j] = 2
            }
        }
    }
    console.log(board)

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 1
            } else if (board[i][j] === 2) {
                board[i][j] = 0
            }
        }
    }

    return board

    function liveNeighbors(row, col) {
        let nums = 0
        let r = [0, 1, -1]
        let c = [0, 1, -1]
        // 用 r, c 控制 row 與 col 的增減
        
        for (let i = 0; i < r.length; i++) {
            for (let j = 0; j < c.length; j++) {
                // Nested for loop 檢查八個方位，除掉中間的點
                if (!(r[i] === 0 && c[j] === 0)) {

                    if ((row + r[i] >= 0 && row + r[i] <= rowMax) && (col + c[j] >= 0 && col + c[j] <= colMax)) {
                        if (board[row + r[i]][col + c[j]] > 0) {nums++}
                        // 用大於 0 表示初始狀態是 live 
                    }

                }
            }
        }
        return nums
    }
};

const board = [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]

console.log(board)
console.log(gameOfLife(board))
var orangesRotting = function(grid) {
    let findRotten = (twoDArr) => {
        let rotten = []

        for (let i = 0; i < twoDArr.length; i++) {
            for (let j = 0; j < twoDArr[i].length; j++) {
                if (twoDArr[i][j] === 2) {
                    let location = []
                    location.push(i)
                    location.push(j)
                    rotten.push(location)
                }
            }
        }

        return rotten
    }

    let checkUnrotten = (twoDArr) => {
        let count = 0

        for (let i = 0; i < twoDArr.length; i++) {
            for (let j = 0; j < twoDArr[i].length; j++) {
                if (twoDArr[i][j] === 1) {
                    count++
                } 
            }
        }
        return count
    }

    let time = 0
    let preUnrotten = checkUnrotten(grid)

    let calculateTimes = (grid) => {
        if (checkUnrotten(grid) === 0) {
            return time
        } else {
            let rotten = findRotten(grid)
            for (let i = 0; i < rotten.length; i++) {
                let x = rotten[i][0]
                let y = rotten[i][1]
                for (let j = 0; j < 4; j++) {
                    if (y + 1 <= grid[0].length - 1 && grid[x][y + 1] === 1) {
                        grid[x][y + 1] = 2
                    } else if (y - 1 >= 0 && grid[x][y - 1] === 1) {
                        grid[x][y - 1] = 2
                    } else if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                        grid[x - 1][y] = 2
                    } else if (x + 1 <= grid.length - 1 && grid[x + 1][y] === 1) {
                        grid[x + 1][y] = 2
                    }
                }
            }
            if (preUnrotten === checkUnrotten(grid)) {
                return -1
            } else {
                preUnrotten = checkUnrotten(grid)
            }
            time++
            return calculateTimes(grid)
        }
    }

    return calculateTimes(grid)
};

let grid = [[2,1,1],[0,1,1],[1,0,1]]
console.log(orangesRotting(grid))
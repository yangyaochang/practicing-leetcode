var islandPerimeter = function(grid) {
    let rowMax = grid.length - 1
    let colMax = grid[0].length - 1
    let perimeter = 0
    // perimeter 周長
    
    const oneLevelBFS = (row, col) => {
        let neighbors = 0
        // 每多一個相鄰的 neighbor 周長就 -1
        if (row + 1 <= rowMax && grid[row + 1][col] === 1) {neighbors++}
        if (row - 1 >= 0 && grid[row - 1][col] === 1) {neighbors++}
        if (col + 1 <= colMax && grid[row][col + 1] === 1) {neighbors++}
        if (col - 1 >= 0 && grid[row][col - 1] === 1) {neighbors++}

        return 4 - neighbors
    }

    for (let i = 0; i <= rowMax; i++) {
        for (let j = 0; j <= colMax; j++) {
            if (grid[i][j] === 1) {
                perimeter += oneLevelBFS(i, j)
            }
        }
    }

    return perimeter
};

const grid = [[0,1,0,0],
                [1,1,1,0],
                [0,1,0,0],
                [1,1,0,0]]

console.log(islandPerimeter(grid))
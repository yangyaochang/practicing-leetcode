var uniquePathsWithObstacles = function(obstacleGrid) {
    let cache = {}

    const move = (row, col) => {
        let position  = row + '_' + col
        if (row >= obstacleGrid.length || col >= obstacleGrid[0].length) {return 0}
        if (obstacleGrid[row][col] === 1) {return 0}
        if (row === obstacleGrid.length - 1 && col === obstacleGrid[0].length - 1) {return 1}
        if (position in cache) {return cache[position]}

        return cache[position] = move(row + 1, col) + move(row, col + 1)
    }

    return move(0, 0)
};

const obstacleGrid = [[0,0,0],
                    [0,1,0],
                    [0,0,0]]

console.log(uniquePathsWithObstacles(obstacleGrid))
/*
Time Complexity: O(m * n)
Space Complexity: O(m * n)
*/

var maxAreaOfIsland = function(grid) {
    let maxArea = -Infinity
    
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
            return 0
        }
        if (grid[row][col] === 0) {return 0}
        
        grid[row][col] = 0
        
        return dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col - 1) + dfs(row, col + 1) + 1
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {            
            maxArea = Math.max(maxArea, dfs(i, j))
        }
    }
    
    return maxArea
};

// 利用 return 1 的方式來計算 area 大小

var maxAreaOfIsland = function(grid) {
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {return 0}
        if (grid[row][col] === 0) {return 0}

        grid[row][col] = 0

        return dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1) + 1
    }

    let maxArea = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {maxArea = Math.max(maxArea, dfs(i, j))}
        }
    }

    return maxArea
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))

var maxAreaOfIsland = function(grid) {
    const dfs = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {return 0}
        if (grid[row][col] === 0) {return 0}

        grid[row][col] = 0
        return dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1) + 1
    }

    let maxArea = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j))
            }
        }
    }
    return maxArea
}

var maxAreaOfIsland = function(grid) {
    const dfs = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {return 0}
        if (grid[row][col] === 0) {return 0}

        grid[row][col] = 0

        return dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col + 1) + dfs(row, col - 1) + 1
    }

    let maxArea = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j))
            }
        }
    }

    return maxArea
}
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
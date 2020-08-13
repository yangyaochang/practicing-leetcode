var wallsAndGates = function(rooms) {
    const visited = new Set()
    const inf = Infinity
    
    const dfs = (r, c, level) => {
        const room = `${r}_${c}`
        if (r < 0 || c < 0 || r >= rooms.length || c >= rooms[0].length) {return}
        if (rooms[r][c] === -1) {return}
        if (visited.has(room)) {return}
        if (level > rooms[r][c]) {return}
        
        if (level < rooms[r][c]) {
            rooms[r][c] = level
        }
        visited.add(room)
        dfs(r + 1, c, level + 1)
        dfs(r - 1, c, level + 1)
        dfs(r, c + 1, level + 1)
        dfs(r, c - 1, level + 1)
        visited.delete(room)
    }
    
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                dfs(i, j, 0)
            }
        }
    }
    return rooms
};

const rooms = [[Infinity, -1, 0, Infinity],
            [Infinity, Infinity, Infinity, -1],
            [Infinity, -1, Infinity, -1],
            [0, -1, Infinity, Infinity]]

console.log(wallsAndGates(rooms))
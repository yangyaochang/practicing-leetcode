/*
Time Complexity: O(n + e) => 每個房間執行一次，每個 key 可以去的房間執行一次。有 visited 過，也是要調用 dfs 判斷是否 visited
Space Complexity: O(n)
*/

var canVisitAllRooms = function(rooms) {
    let adjacentList = {}
    let visited = new Set()

    rooms.forEach((room, index) => {
        adjacentList[index] = room
    })

    const dfs = (room) => {
        if (visited.has(room)) {return}

        visited.add(room)

        const keys = adjacentList[room]
        for (let i = 0; i < keys.length; i++) {
            dfs(keys[i])
        }
    }

    dfs(0)

    return visited.size === rooms.length
};

const rooms = [[1,3],[3,0,1],[2],[0]]

console.log(canVisitAllRooms(rooms))
/*
建立可以互相 swap 的 index group，再建立 index group 對應到的 characters group，兩者都排序後
按照由小到大形成新的 string
*/

var smallestStringWithSwaps = function(s, pairs) {
    if (pairs.length === 0) {return s}
    const graph = {}

    for (let i = 0; i < s.length; i++) {
        graph[i] = []
    }

    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] === pairs[i][1]) {continue}

        graph[pairs[i][0]].push(pairs[i][1])
        graph[pairs[i][1]].push(pairs[i][0])
    }

    const visited = new Set()
    const indexGroups = []
    const charGroups = []

    const dfs = (cur, group, char) => {
        if (visited.has(cur)) {return}

        visited.add(cur)
        group.push(cur)
        char.push(s[cur])

        
        const neighbors = graph[cur]
        neighbors.forEach(neighbor => {dfs(neighbor, group, char)})
    }

    for (let i = 0; i < s.length; i++) {
        if (!visited.has(i)) {
            const group = []
            const char = []
            dfs(i, group, char)
            indexGroups.push(group)
            charGroups.push(char)
        }
    }

    indexGroups.forEach(group => {
        group.sort((a, b) => a - b)
    })

    charGroups.forEach(group => {
        group.sort((a, b) => a.localeCompare(b))
    })

    let result = new Array(s.length)

    for (let i = 0; i < indexGroups.length; i++) {
        for (let j = 0; j < indexGroups[i].length; j++) {
            result[indexGroups[i][j]] = charGroups[i][j]
        }
    }

    return result.join('')
}

const s = "udyyek"
const pairs = [[3,3],[3,0],[5,1],[3,1],[3,4],[3,5]]

console.log(smallestStringWithSwaps(s, pairs))
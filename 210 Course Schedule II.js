/*
沒有 prerequisite 的課也要被考慮到 graph 裡
把 cycle detection 與 topological sort 結合起來
*/

var findOrder = function(numCourses, prerequisites) {
    let list = []
    let visited = new Set()
    let ancestors = new Set()
    let graph = {}
    let acyclic = true

    for (let i = 0; i < numCourses; i ++) {
        graph[i] = []
    }

    prerequisites.forEach(course => {
        if (course[1] in graph) {
            graph[course[1]].push(course[0])
        }
    })

    const dfs = (course) => {
        if (ancestors.has(course)) {
            acyclic = false
            return
        }
        if (visited.has(course)) {return}

        visited.add(course)
        ancestors.add(course)

        let neighbors = graph[course]

        for (let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i])
        }

        list.push(course)
        ancestors.delete(course)
    }

    for (let i = 0; i < numCourses; i ++) {
        dfs(i)
    }

    if (acyclic) {return list.reverse()}
    return []
};

const numCourses = 2
const prerequisites = [[0,1],[1,0]]

console.log(findOrder(numCourses, prerequisites))

// 跟第一次做的心得一樣，把 topological sort 與 detect cycle 合併在 dfs 裡

var findOrder = function(numCourses, prerequisites) {
    const graph = {}

    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }

    prerequisites.forEach(course => {
        graph[course[1]].push(course[0])
    })

    const visited = new Set()
    const ancestors = new Set()
    let cyclic = false
    const list = []

    const dfs = (cur) => {
        if (ancestors.has(cur)) {
            cyclic = true
            return
        }
        if (visited.has(cur)) {return}

        visited.add(cur)
        ancestors.add(cur)
        const courses = graph[cur]
        courses.forEach(course => {dfs(course)})
        ancestors.delete(cur)
        list.push(cur)
    }

    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }

    return (cyclic) ? [] : list.reverse()
};

// Topological sort 用 postorder 實現，Check cyclic 用 preorder 實現

var findOrder = function(numCourses, prerequisites) {
    const graph = {}
    const list = []
    const visited = new Set()
    const ancestors = new Set()
    let isCyclic = false

    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }

    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][1]].push(prerequisites[i][0])
    }

    for (let i = 0; i < numCourses; i++) {
        topologicalSort(i)
    }

    return isCyclic ? [] : list.reverse()

    function topologicalSort(current) {
        if (ancestors.has(current)) {
            isCyclic = true
            return
        }
        if (visited.has(current)) {return}

        ancestors.add(current)

        for (let i = 0; i < graph[current].length; i++) {
            topologicalSort(graph[current][i])
        }
        visited.add(current)
        list.push(current)
        ancestors.delete(current)
    }
}
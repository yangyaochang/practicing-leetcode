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
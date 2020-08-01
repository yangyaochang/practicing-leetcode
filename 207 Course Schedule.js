/*
Detecting a cycle in a directed graph
要注意沒有 prerequisite 的 course 也要出現在 adjacent list 的 key 裡
adjacent list 的 key 是所有的 vertex
*/

var canFinish = function(numCourses, prerequisites) {
    let courseGraph = toAdjacentList(prerequisites)
    let visited = new Set()
    let ancestors = new Set()

    const dfs = (current) => {
        if (ancestors.has(current)) {return true}
        if (visited.has(current)) {return}
        
        visited.add(current)
        ancestors.add(current)
        let neighbors = courseGraph[current]
        for (let i = 0; i < neighbors.length; i++) {
            if (dfs(neighbors[i])) {
                return true
            }
        }
        ancestors.delete(current)
        return false
    }

    let keys = Object.keys(courseGraph)

    for (let i = 0; i < keys.length; i++) {
        if(dfs(keys[i])) {return false}
    }

    return true
    
    function toAdjacentList(edgeList) {
        let graph = {}
        for (let i = 0; i < edgeList.length; i++) {
            if (edgeList[i][1] in graph === false) {
                graph[edgeList[i][1]] = [edgeList[i][0]]
            } else {
                graph[edgeList[i][1]].push(edgeList[i][0])
            }
            //adjacent list 的 key 是所有的 vertex
            if (edgeList[i][0] in graph === false) {
                graph[edgeList[i][0]] = []
            }
        }
        return graph
    }
};

// 第二次做，多了一個 base case 直接返回沒有後續課程的 course

var canFinish = function(numCourses, prerequisites) {
    let graph = {}
    let visited = new Set()
    let ancestors = new Set()
    let acyclic = true

    prerequisites.forEach(course => {
        if (course[1] in graph) {
            graph[course[1]].push(course[0])
        } else {
            graph[course[1]] = [course[0]]
        }
    })

    const dfs = (current) => {
        if (ancestors.has(current)) {
            acyclic = false
            return
        }
        if (current in graph === false) {return}
        // 沒有後續課程的 course 直接返回
        if (visited.has(current)) {return}

        visited.add(current)
        ancestors.add(current)

        let neighbors = graph[current]

        for (let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i])
        }

        ancestors.delete(current)
    }

    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }

    return acyclic
};

const numCourses = 2
const prerequisites = [[1,0]]

console.log(canFinish(numCourses, prerequisites))
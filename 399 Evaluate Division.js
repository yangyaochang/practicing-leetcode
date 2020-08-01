/*
建立有權重的 graph
當起點與終點彼此不相連時如何 push -1 到 list 中
*/

const calcEquation = (equations, values, queries) => {
    const graph = convertToGraph(equations, values)
    let list = []

    const dfs = (current, target, value, seen) => {
        if (seen.has(current)) {return}
        if (current in graph === false || target in graph === false) {
            list.push(-1)
            return
        }
        if (current === target) {
            list.push(value)
            return
        }

        seen.add(current)

        let neighbors = graph[current]

        for (let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i].adjacent, target, value * neighbors[i].value, seen)
        }
    }

    for (let i = 0; i < queries.length; i++) {
        dfs(queries[i][0], queries[i][1], 1, new Set())
        if (list[i] === undefined) {list[i] = -1}
    }

    return list

    function convertToGraph (equations, values) {
        let graph = {}
    
        equations.forEach((equation, index) => {
            if (equation[0] in graph) {
                graph[equation[0]].push({adjacent: equation[1], value: values[index]})
            } else {
                graph[equation[0]] = [{adjacent: equation[1], value: values[index]}]
            }
            if (equation[1] in graph) {
                graph[equation[1]].push({adjacent: equation[0], value: 1 / values[index]})
            } else {
                graph[equation[1]] = [{adjacent: equation[0], value: 1 / values[index]}]
            }
        })
    
        return graph
    }
};

const equations = [["a","b"],["b","c"]]
const values = [2.0,3.0]
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

console.log(calcEquation(equations, values, queries))

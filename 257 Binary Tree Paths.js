/*
到 leaf 是兩個 child 都是 null 不是只要一個 null 就是到終點
不用 backtracking 
加 -> 的格式規定是麻煩的地方
*/

var binaryTreePaths = function(root) {
    let paths = []

    const dfs = (current, path) => {
        if (current === null) {return null}

        path += `${current.val}->`
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)

        if (left === null && right === null) {
            let temp = path.slice(0, path.length - 2)
            paths.push(temp)
        }
    }

    dfs(root, '')
    return paths
};
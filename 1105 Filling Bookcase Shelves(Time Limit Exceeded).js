var minHeightShelves = function(books, shelf_width) {
    let minHeight = Infinity

    const dfs = (path, index, height) => {
        if (index === books.length) {
            console.log(path, height)
            minHeight = Math.min(minHeight, height)
            return
        }
        if (height >= minHeight) {return}

        if (path[path.length - 1][0] + books[index][0] <= shelf_width) {
            let temp = [...path[path.length - 1]]
            path[path.length - 1][0] += books[index][0]

            let increment = 0
            if (path[path.length - 1][1] < books[index][1]) {
                increment = books[index][1] - path[path.length - 1][1]
                path[path.length - 1][1] = books[index][1]
            }
        
            dfs(path, index + 1, height + increment)
            path[path.length - 1] = temp
        }
        path.push([...books[index]])
        dfs(path, index + 1, height + books[index][1])
        path.pop()
    }

    dfs([[...books[0]]], 1, books[0][1])
    return minHeight
};

const books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]]
const shelf_width = 4

console.log(minHeightShelves(books, shelf_width))
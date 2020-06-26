var floodFill = function(image, sr, sc, newColor) {
    let queue = []
    let visited = new Set()
    let rowMax = image.length - 1
    let colMax = image[0].length - 1
    let target = image[sr][sc]

    queue.push([sr, sc])
    visited.add(`${sr}${sc}`)

    while (queue.length > 0) {
        let current = queue.shift()

        image[current[0]][current[1]] = newColor

        if (current[1] + 1 <= colMax && image[current[0]][current[1] + 1] === target && !visited.has(`${current[0]}${current[1] + 1}`)) {
            queue.push([current[0], current[1] + 1])
            visited.add(`${current[0]}${current[1] + 1}`)
        }
        if (current[1] - 1 >= 0 && image[current[0]][current[1] - 1] === target && !visited.has(`${current[0]}${current[1] - 1}`)) {
            queue.push([current[0], current[1] - 1])
            visited.add(`${current[0]}${current[1] - 1}`)
        }
        if (current[0] + 1 <= rowMax && image[current[0] + 1][current[1]] === target && !visited.has(`${current[0] + 1}${current[1]}`)) {
            queue.push([current[0] + 1, current[1]])
            visited.add(`${current[0] + 1}${current[1]}`)
        }
        if (current[0] - 1 >= 0 && image[current[0] - 1][current[1]] === target && !visited.has(`${current[0] - 1}${current[1]}`)) {
            queue.push([current[0] - 1, current[1]])
            visited.add(`${current[0] - 1}${current[1]}`)
        }
    }
    return image
};

const image = [[1,1,1],[1,1,0],[1,0,1]]
const sr = 1
const sc = 1
const newColor = 2

console.log(floodFill(image, sr, sc, newColor))
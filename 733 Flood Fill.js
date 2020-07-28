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

// 第二次做

var floodFill = function(image, sr, sc, newColor) {
    let visited = new Set()
    // 萬一 newColor 與 original color 同值，會出現 stack overflow
    
    const dfs  = (row, col, value, newColor, image) => {
        value = (value === undefined) ? image[row][col] : value
        // 用 value = value || image[row][col]，若 image[row][col] = 0 會都是 false
        
        let position = `${row}_${col}`
        
        if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
            return; 
        }
        if (image[row][col] !== value) {
            return;
        }
        if (visited.has(position)) {return}

        visited.add(position)
        image[row][col] = newColor;

        dfs(row + 1, col, value, newColor, image);
        dfs(row - 1, col, value, newColor, image);
        dfs(row, col + 1, value, newColor, image);
        dfs(row, col - 1, value, newColor, image);
    }

    dfs(sr, sc, undefined, newColor, image);
    return image;
};



const image = [[1,1,1],[1,1,0],[1,0,1]]
const sr = 1
const sc = 1
const newColor = 2

console.log(floodFill(image, sr, sc, newColor))
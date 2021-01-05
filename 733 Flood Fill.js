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

/* 
第三次做方法更簡潔了
碰到這種 traversed 過後可以更改數值的，可以省略掉使用 visited set
*/

var floodFill = function(image, sr, sc, newColor) {
    const originalColor = image[sr][sc]
    
    const changeColor = (r, c) => {
        if (r < 0 || c < 0 || r >= image.length || c >= image[0].length) {return}
        if (image[r][c] !== originalColor) {return}

        image[r][c] = newColor

        changeColor(r + 1, c)
        changeColor(r - 1, c)
        changeColor(r, c + 1)
        changeColor(r, c - 1)
    }
    
    if (originalColor === newColor) {return image}
    changeColor(sr, sc)
    return image
};

// 第四次做

var floodFill = function(image, sr, sc, newColor) {
    const target = image[sr][sc]

    const dfs = (row, col) => {
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length) {
            return
        }
        if (image[row][col] !== target) {return}

        image[row][col] = newColor
        
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    if (target === newColor) {return image}
    dfs(sr, sc)
    return image
};

// 第五次做

var floodFill = function(image, sr, sc, newColor) {
    const origlnal = image[sr][sc]
    
    const dfs = (row, col) => {
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length) {return}
        if (image[row][col] !== origlnal) {return}
        if (image[row][col] === newColor) {return}

        image[row][col] = newColor

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    dfs(sr, sc)
    return image
}
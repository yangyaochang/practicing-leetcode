var findLonelyPixel = function(picture) {
    const row = {}
    const col = {}
    
    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < picture[0].length; j++) {
            if (picture[i][j] === 'B') {
                if (i in row) {row[i].push(j)}
                else {row[i] = [j]}
                if (j in col) {col[j]++}
                else {col[j] = 1}
            }
        }
    }
    
    let count = 0
    
    for (let r in row) {
        if (row[r].length === 1) {
            if (col[row[r][0]] === 1) {count++}
        }
    }
    return count
};
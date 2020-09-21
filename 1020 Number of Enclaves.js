var numEnclaves = function(A) {
    const count = (r, c) => {
        if (r < 0 || c < 0 || r >= A.length || c >= A[0].length) {return -Infinity}
        if (A[r][c] === 0) {return 0}
        
        A[r][c] = 0
        
        return count(r + 1, c) + count(r - 1, c) + count(r, c + 1) + count(r, c - 1) + 1
    }
    
    let num = 0
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 1) {
                const n = count(i, j)
                num += (n === -Infinity) ? 0 : n
            }
        }
    }
    return num
};
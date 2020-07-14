var minimumTotal = function(triangle) {
    let min = Infinity

    const dfs = (row, col, sum) => {
        if (row === triangle.length - 1) {
            sum += trangle[row][col]
            min = Math.min(min, sum)
            return 
        }

        sum += trangle[row][col]

        dfs(row + 1, col, sum)
        dfs(row + 1, col + 1, sum)
    }

    dfs(0, 0, 0)
    return min
};

var minimumTotal = function(triangle) {
    let num = triangle.length
    let list = []

    for (let i = 0; i < num; i++) {
        let row = new Array(i + 1)
        row.fill(0)

        list.push(row)
    }

    list[0][0] = triangle[0][0]

    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (j === 0) {list[i][j] = list[i - 1][j] + triangle[i][j]}
            else if (i === j) {list[i][j] = list[i - 1][j - 1] + triangle[i][j]}
            else {
                list[i][j] = Math.min(list[i - 1][j - 1], list[i - 1][j]) + triangle[i][j]
            }
        }
    }

    return Math.min(...list[num - 1])
};

const triangle = [[2],
                [3,4],
                [6,5,7],
                [4,1,8,3]]

console.log(minimumTotal(triangle))
var minTimeToVisitAllPoints = function(points) {
    let steps = 0

    for (let i = 0; i < points.length - 1; i++) {
        let dx = Math.abs(points[i][0] - points[i + 1][0])
        let dy = Math.abs(points[i][1] - points[i + 1][1])

        steps += Math.max(dx, dy)
    }

    return steps
};

const points = [[1,1],[3,4],[-1,0]]

console.log(minTimeToVisitAllPoints(points))
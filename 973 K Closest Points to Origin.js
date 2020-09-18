var kClosest = function(points, K) {
    const distance = (point) => {
        return Math.pow(Math.pow(point[0], 2) + Math.pow(point[1], 2), 1 / 2)
    }

    const quicksort = (arr) => {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (i = s; i < e; i++) {
                if (distance(arr[i]) < distance(arr[e])) {
                    [arr[m], arr[i]] = [arr[i], arr[m]]
                    m++
                }
            }
            [arr[m], arr[e]] = [arr[e], arr[m]]

            divide(s, m - 1)
            divide(m + 1, e)
        }

        divide(0, arr.length - 1)
        return arr
    }

    points = quicksort(points)

    return points.slice(0, K)
}

const points = [[3,3],[5,-1],[-2,4]]
const K = 2

console.log(kClosest(points, K))
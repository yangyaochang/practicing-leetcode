/*
如果每一步都挑最省的，最終得到最省的解。最省要看 A - B
*/

var twoCitySchedCost = function(costs) {
    costs = quicksort(costs)
    let total = 0
    let n = costs.length / 2
    console.log(costs)

    for (let i = 0; i < costs.length; i++) {
        if (i < n) {
            total += costs[i][0]
        }
        else {
            total += costs[i][1]
        }
    }

    return total

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}
            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i][0] - arr[i][1] < arr[e][0] - arr[e][1]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]
            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
};

const costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]

console.log(twoCitySchedCost(costs))
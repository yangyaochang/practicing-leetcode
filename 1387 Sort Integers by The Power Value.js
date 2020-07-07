var getKth = function(lo, hi, k) {
    let list = []

    for (let i = lo; i <= hi; i++) {
        list.push(i)
    }

    list = quicksort(list)

    return list[k - 1]

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (getPower(arr[i]) < getPower(arr[e])) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                } else if (getPower(arr[i]) === getPower(arr[e])) {
                    if (arr[i] < arr[e]) {
                        [arr[i], arr[m]] = [arr[m], arr[i]]
                        m++
                    }
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]
            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
    
    function getPower(num) {
        let power = 0

        while (num !== 1) {
            power++
            if (num % 2 === 0) {
                num = num / 2
            } else {
                num = 3 * num + 1
            }
        }
        return power
    }
};

const lo = 7
const hi = 11
const k = 4

console.log(getKth(lo, hi, k))
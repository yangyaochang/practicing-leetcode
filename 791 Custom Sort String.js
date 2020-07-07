var customSortString = function(S, T) {
    let cache = {}
    let match = []
    let rest = []

    for (let i = 0; i < S.length; i++) {
        cache[S[i]] = i
    }

    for (let i = 0; i < T.length; i++) {
        if (T[i] in cache) {match.push(T[i])}
        else {rest.push(T[i])}
    }

    match = quicksort(match).concat(rest)
    return match.join('')

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (cache[arr[i]] < cache[arr[e]]) {
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

const S = "cba"
const T = "abcd"

console.log(customSortString(S, T))
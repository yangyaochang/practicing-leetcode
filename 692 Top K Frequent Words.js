var topKFrequent = function(words, k) {
    const cache = {}

    for (let i = 0; i < words.length; i++) {
        if (words[i] in cache) {cache[words[i]]++}
        else {cache[words[i]] = 1}
    }

    let keys = Object.keys(cache)
    keys = quicksort(keys)

    return keys.slice(0, k)

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (cache[arr[i]] > cache[arr[e]]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                } else if (cache[arr[i]] === cache[arr[e]] && arr[i].localeCompare(arr[e]) < 0) {
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
}

const words = ["love", "love", "leetcode", "i", "i", "coding"]
const k = 2

console.log(topKFrequent(words, k))
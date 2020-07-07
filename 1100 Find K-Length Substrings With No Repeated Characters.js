var numKLenSubstrNoRepeats = function(S, K) {
    let slow = 0
    let fast = 0
    let cache = new Set()
    let count = 0

    while (fast < S.length) {
        if (cache.has(S[fast]) === false) {
            cache.add(S[fast])
            if (fast - slow === K - 1) {
                count++
                cache.delete(S[slow])
                slow++
            }
            fast++
        } else {
            cache.delete(S[slow])
            slow++
        }
    }
    return count
};

const S = "havefunonleetcode"
const K = 5

console.log(numKLenSubstrNoRepeats(S, K))
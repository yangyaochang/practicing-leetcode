var lengthOfLongestSubstring = function(s) {
    let slow = 0;
    let fast = 0;
    let cache = new Set();
    let length = 0
    while (fast < s.length) {
        if (!cache.has(s[fast])) {
            cache.add(s[fast]);
            length = ((fast - slow + 1) > length) ? (fast - slow + 1) : length
            fast++
        } else {
            cache.delete(s[slow])
            slow++
        }
    }
    return length
};

/*
第二個做法把 right 設在 left + 1
就必須注意先把 s[left] 放到 cache 裡
以及 maxLength 一開始的初始值是 1 的問題
*/

var lengthOfLongestSubstring = function(s) {
    const cache = new Set()

    let left = 0
    let right = left + 1
    let maxLength = 1

    if (s === '') {return 0}
    cache.add(s[left])

    while (right < s.length) {
        if (cache.has(s[right]) === false) {
            cache.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        } else {
            cache.delete(s[left])
            left++
        }
    }

    return maxLength
}
/*
Time Complexity: O(n)
Space Complexity: O(1) 
*/

var isSubsequence = function(s, t) {
    let p1 = 0

    for (let p2 = 0; p2 < t.length; p2++) {
        if (s[p1] === t[p2]) {p1++}
    }

    return p1 === s.length
};

/*
Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. 
In this scenario, how would you change your code?
*/

var isSubsequence_binarySearch = function(s, t) {
    let cache = {}

    for (let i = 0; i < t.length; i++) {
        if (t[i] in cache) {
            cache[t[i]].push(i)
        } else {
            cache[t[i]] = [i]
        }
    }
    
    let target = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] in cache === false) {return false}

        let next = leftMost(cache[s[i]], target)
        if (next >= cache[s[i]].length) {return false}

        target = cache[s[i]][next] + 1
    }

    return true

    function leftMost(nums, target) {
        let left = 0
        let right = nums.length - 1
        let mid

        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) {return mid}
            else if (nums[mid] > target) {right = mid - 1}
            else if (nums[mid] < target) {left = mid + 1}
        }
        return left
    }
};

const s = "abc"
const t = "ahbgdc"

console.log(isSubsequence(s, t))
console.log(isSubsequence_binarySearch(s, t))
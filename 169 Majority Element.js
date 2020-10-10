// Hash map 作法

var majorityElement = function(nums) {
    let cache = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (cache.has(nums[i])) {
            let times = cache.get(nums[i])
            cache.set(nums[i], times + 1)
        } else {cache.set(nums[i], 1)}
    }

    for (let count of cache.entries()) {
        if (count[1] > Math.floor(nums.length / 2)) {return count[0]}
    }
};

/*
可以用 brute force 做 frequenct count

第二種方法
邏輯推演是：
無論 array 是奇數個還是偶數個，majority element 永遠可以在 index = Math.floor(arr.length / 2) 找到

Time Complexity: O(nlogn)
Space Complexity: O(logn) => 為什麼 quick sort space complexity 是 log(n)？
不斷把 array 拆分成一半直到 array 只剩一個元素推得 2 ^ h = n
h = log 以 2 為底 n 的對數 
思考一下 quicl sort 在 worst case 時的 space complexity O(n), Time Complexity O(n ^ 2)
*/

var majorityElement = function(nums) {
    nums = quicksort(nums)
    const mid = Math.floor(nums.length / 2)
    return nums[mid]

    function quicksort(arr) {

        const divide = (s, e) => {
            if (s >= e) {return}
            
            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i] < arr[e]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
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
};

const nums = [2,2,1,1,1,2,2]

console.log(majorityElement(nums))

// 用 sort

var majorityElement = function(nums) {
    const quicksort = (arr) => {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i] < arr[e]) {
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

    nums = quicksort(nums)
    return nums[Math.floor(nums.length / 2)]
}

// 用 frequency count

var majorityElement = function(nums) {
    const majority = Math.floor(nums.length / 2) + 1
    const frequency = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in frequency) {
            frequency[nums[i]]++
        } else {
            frequency[nums[i]] = 1
        }

        if (frequency[nums[i]] === majority) {
            return nums[i]
        }
    }
}


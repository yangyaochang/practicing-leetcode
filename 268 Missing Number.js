var missingNumber = function(nums) {
    let cache = new Set()
    let missing

    for (let i = 0; i <= nums.length; i++) {
        cache.add(i)
    }

    for (let i = 0; i < nums.length; i++) {
        if (cache.has(nums[i])) {cache.delete(nums[i])}
    }

    for (let num of cache.keys()) {
        missing = num
    }

    return missing
};

const nums = [3,0,1]

console.log(missingNumber(nums))

/* 
第二次做
Time Complexity: O(n)
Space Complexity: O(n)
*/

var missingNumber = function(nums) {
    const cache = new Set()

    nums.forEach(num => {cache.add(num)})

    for (let i = 0; i <= nums.length + 1; i++) {
        if (cache.has(i) === false) {return i}
    }
};

/* 
Sorting
Time Complexity: O(n)
Space Complexity: O(1)
*/

var missingNumber = function(nums) {
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
    if (nums[0] !== 0) {return 0}
    if (nums[nums.length - 1] !== nums.length) {return nums.length}
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== i) {return i}
    }
};
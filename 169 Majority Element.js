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

var majorityElement = function(nums) {
    nums = quicksort(nums)

    return nums[Math.floor(nums.length / 2)]

    function quicksort(arr) {
        const divide = (start, end) => {
            
            if (start >= end) {return}

            let mid = start
            for (let i = start; i < end; i++) {
                if (arr[i] < arr[end]) {
                    [arr[i], arr[mid]] = [arr[mid], arr[i]]
                    mid++
                }
            }
            [arr[end], arr[mid]] = [arr[mid], arr[end]]

            divide(start, mid - 1)
            divide(mid + 1, end)
        }

        divide(0, arr.length - 1)
        return arr
    }
};


const nums = [2,2,1,1,1,2,2]

console.log(majorityElement(nums))
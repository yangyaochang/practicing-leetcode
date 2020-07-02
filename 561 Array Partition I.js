var arrayPairSum = function(nums) {
    nums = quicksort(nums)
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {sum += nums[i]}
    }

    return sum

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
            [arr[e], arr[m]] = [arr[m], arr[e]]
            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
};

const nums = [1,4,3,2]

console.log(arrayPairSum(nums))
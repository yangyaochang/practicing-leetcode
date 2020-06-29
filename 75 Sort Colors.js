var sortColors = function(nums) {
    return quicksort(nums)
    
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

const nums = [2,0,2,1,1,0]

console.log(sortColors(nums))
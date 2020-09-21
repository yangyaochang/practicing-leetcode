/*
You may imagine that nums[-1] = nums[n] = -∞.
這句是關鍵
Time Complexity: O(n)
Space Complexity: O(1)
*/

var findPeakElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {return i}
    }
    
    return nums.length - 1
};

/*
Binary Search 作法
由於 You may imagine that nums[-1] = nums[n] = -∞.
取得 mid 後，因為 where nums[i] ≠ nums[i+1]
所以 nums[mid], nums[mid + 1] 會有遞增、遞減兩種可能
若是遞增必有一個 peak 在右半，不包含 mid
若是遞減必有一個 peak 在左半，可能包含 mid

Time Complexity: O(logn)
Space Complexity: O(1)
*/

var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        // [left, right] 是閉區間，while loop 終止的條件為 left = right，區間內剛好有一個 element 為答案
        let mid = Math.floor((left + right) / 2)
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        }
    }
    return left
};

/*
第三次做
本來用閉區間的做法，但發現這樣想會需要處理幾個特殊狀況

還是可以根據 Binary Search 的方法來想
不過要注意若發現 nums[mid] < nums[mid + 1] peak 會在右邊不包含 mid
若是 nums[mid] > nums[mid + 1] peak 會在左邊可能包含 mid
考慮 peak 在中間、最左、最右三種情況後，自然會將 while loop 條件改完 left < right 最後返回 left
*/

var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        

        if (nums[mid] < nums[mid + 1]) {left = mid + 1}
        else if (nums[mid] > nums[mid + 1]) {right = mid}
    }

    return left
}

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
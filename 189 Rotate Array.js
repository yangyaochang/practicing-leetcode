var rotate = function(nums, k) {
    k = k % nums.length
    let move = nums.length - k

    while (move > 0) {
        nums.push(nums.shift())
        move--
    }
};
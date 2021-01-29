/*
House Robber 的延伸

只是用兩個 dp table 區別第一間搶了與第一間不搶的狀況
第一間搶了最後只能要最後一間不搶的結果
第一間不搶那最後一間搶與不搶的結果都可以
三者互相比出最大值
*/

var rob = function(nums) {
    const dp_skipHouse1 = []
    const dp_robbedHouse1 = []
    
    for (let i = 0; i < nums.length; i++) {
        dp_skipHouse1.push([0, 0])
        dp_robbedHouse1.push([0, 0])
    }
    
    dp_skipHouse1[0][0] = 0
    dp_skipHouse1[0][1] = 0
    dp_robbedHouse1[0][0] = 0
    dp_robbedHouse1[0][1] = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        dp_skipHouse1[i][0] = Math.max(dp_skipHouse1[i - 1][0], dp_skipHouse1[i - 1][1])
        dp_skipHouse1[i][1] = dp_skipHouse1[i - 1][0] + nums[i]
        dp_robbedHouse1[i][0] = Math.max(dp_robbedHouse1[i - 1][0], dp_robbedHouse1[i - 1][1])
        dp_robbedHouse1[i][1] = dp_robbedHouse1[i - 1][0] + nums[i]
    }
    
    if (nums.length === 1) {return nums[0]}
    return Math.max(dp_robbedHouse1[nums.length - 1][0], dp_skipHouse1[nums.length - 1][0], dp_skipHouse1[nums.length - 1][1])
};

// 應該可以進一步壓縮 Space Complexity
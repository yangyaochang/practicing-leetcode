/*
用跟買股票的想法一樣去思考
每棟房子有搶與不搶兩種選擇

dp[i][0] 代表不搶第 i 棟房子的最大所得
dp[i][1] 代表搶第 i 棟房子的最大所得

dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]) 第 i 棟沒搶會是前一棟有搶與沒搶的最大值
dp[i][1] = dp[i - 1][0] + arr[i] 第 u 棟要搶前一棟一定不能搶

Base cases:
dp[0][1] = arr[0] 搶了第一棟
dp[0][0] = 0 沒搶第一棟
*/

var rob = function(arr) {
    if (arr.length === 0) {return 0}
    
    const dp = []

    for (let i = 0; i < arr.length; i++) {
        dp.push([0, 0])
    }
    
    dp[0][1] = arr[0]
    dp[0][0] = 0

    for (let i = 1; i < arr.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
        dp[i][1] = dp[i - 1][0] + arr[i]
    }

    return Math.max(dp[arr.length - 1][0], dp[arr.length - 1][1])
}

// 進一步壓縮 Space Complexity

var rob = function(arr) {
    if (arr.length === 0) {return 0}
    
    let dp_00 = 0
    let dp_01 = arr[0]
    let dp_i0
    let dp_i1

    for (let i = 1; i < arr.length; i++) {
        dp_i0 = Math.max(dp_00, dp_01)
        dp_i1 = dp_00 + arr[i]
        dp_00 = dp_i0
        dp_01 = dp_i1
    }

    return Math.max(dp_00, dp_01)
};
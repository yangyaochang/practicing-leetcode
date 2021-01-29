// 答案參考：https://leetcode-cn.com/problems/insert-interval/solution/shou-hua-tu-jie-57-cha-ru-qu-jian-fen-cheng-3ge-ji/

var insert = function(intervals, newInterval) {
    const result = []
    let i = 0
    
    // 推入在 newInterval 之前 沒有重疊的區塊
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i])
        i++
    }

    // 前一個 while loop 已經 iterate 完在 newInterval 之前的了 所以若 intervals[i][0] <= newInterval[1] 就表示有重疊
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    result.push(newInterval)

    // 推入在 newInterval 之後 沒有重疊的區塊
    while (i < intervals.length) {
        result.push(intervals[i])
        i++
    }

    return result
};
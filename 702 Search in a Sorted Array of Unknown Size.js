/*
Assume all integers in the array are less than 10000, and if you access the array out of bounds, ArrayReader.get will return 2147483647.
先定義要搜尋的範圍，如果 right 超過了 array size 會因為會 return 一個遠大於 10000 的數ㄧ樣讓 while loop 終止，同樣的機制也可以讓 binary search 階段的
reader.get(mid) > target 順利進行
*/

var search = function (reader, target) {
    let left = 0
    let right = 1
    let mid
    
    while (reader.get(right) < target) {
        left = right + 1
        right = right * 2
    }
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (reader.get(mid) === target) {return mid}
        else if (reader.get(mid) > target) {right = mid - 1}
        else if (reader.get(mid) < target) {left = mid + 1}
    }
    return -1
};
var isLongPressedName = function(name, typed) {
    let name_i = 0
    let typed_i = 0

    while (typed_i < typed.length && name_i < name.length) {
        if (name[name_i] === typed[typed_i]) {
            name_i++
            typed_i++
        } else if (name[name_i] !== typed[typed_i]) {
            // 如果與前一個字母一樣才前進
            if (typed[typed_i] === typed[typed_i - 1]) {typed_i++}
            else {return false}
        }
    }

    if (name_i === name.length) {
        for (let i = typed_i; i < typed.length; i++) {
            if (typed[typed_i - 1] !== typed[i]) {return false}
        }
        return true
    }
    return false
};

const name = "alex"
const typed = "aaleelx"

console.log(isLongPressedName(name, typed))

/*
這題感覺考的是如何把每個狀況都想清楚
*/

var isLongPressedName = function(name, typed) {
    let p1 = 0
    let p2 = 0

    while (p1 < name.length && p2 < typed.length) {
        if (name[p1] === typed[p2]) {
            p1++
            p2++
        } else if (name[p1] !== typed[p2]) {
            // 要考慮到可能第一個字母就不同的情況 p2 = 0, typed[p2 - 1] 不存在
            if ((p2 > 0 && typed[p2] !== typed[p2 - 1]) || p2 === 0) {return false}
            else {p2++}
        }
    }

    // 有可能有四種狀況：p1, p2 都沒走到底、p1, p2 其中一個走到底、p1, p2 都走到底
    // 只有 p1 已經走到底的狀況才有可能為 true
    if (p1 === name.length) {
        // p2 沒走到底要檢查後面的字母是否都一樣
        for (let i = p2; i + 1< typed.length; i++) {
            if (typed[i] !== typed[i + 1]) {return false}
        }
        // 若 p2 走到底會直接跳過 for loop
        return true
    }
    return false
}
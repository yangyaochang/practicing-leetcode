/*
這題是已經確定要找出四個數，也就是有四個位置可以放
從 s 中取出不同的數依序填滿這四個位置

在畫樹狀圖的時候每一個 level 代表的嘗試不同的數放到 path[i] 的位置上
所以樹狀結構會停在 path[3] 這個地方，若此時 s 已經拿完則為解
剩下的其他情況都是直接 return 
這樣的 Base Case 比之前的好理解

以其中一條 path 為例
path[0] => [2]
path[1] => [2, 5]
path[2] => [2, 5, 5]
path[3] => [2, 5, 5, 2]
*/

var restoreIpAddresses = function(s) {
    const list = []

    const constructIP = (left, right, path) => {
        if (path.length === 4 && left === s.length) {
            list.push(path.join('.'))
            return
        }
        if (path.length === 4) {return}

        for (let i = 0; i < 3; i++) {
            // no leading zero
            if (s[left] === '0' && i !== 0) {break}
            const num = Number(s.slice(left, right + i))
            if (num <= 255) {
                path.push(num)
                constructIP(right + i, right + i + 1, path)
                path.pop()
            }
        }
    }

    constructIP(0, 1, [])
    return list
}

const s = "25525511135"

console.log(restoreIpAddresses(s))

/*
合法的 ip 除了要介於 0~255 之間外，若超過兩位數開頭不可為 0

base case 可以這樣想
以達到四個數但 s 還未走完 return 
s 走完了 但還沒達到四個數 return

s 還沒走完 也還沒達到四個數 recursive case

剩下是達到四個數 或 s 走完都指向同一個群 都是答案 所以寫一個條件就夠

*/

var restoreIpAddresses = function(s) {
    let left = 0
    let right = left + 1
    const list = []

    const constructIP = (left, right, ip) => {
        if (ip.length === 4 && left !== s.length) {return}
        if (ip.length !== 4 && left === s.length) {return}
        if (left === s.length) {
            list.push(ip.join('.'))
            return
        }
        

        for (let i = 0; i < 3; i++) {
            if (i !== 0 && s[left] === '0') {continue}
            const num = Number(s.slice(left, right + i))
            if (num <= 255) {
                ip.push(num)
                constructIP(right + i, right + i + 1, ip)
                ip.pop()
            }
        }
    }

    constructIP(left, right, [])
    return list
};

const s = "0000"

console.log(restoreIpAddresses(s))

/*
在每一個 state，可以用 left, right 取長度為 1, 2, 3 的 string，若數值大小為 valid 則 push 到 ip array
*/

var restoreIpAddresses = function(s) {
    const list = []
    
    const buildIP = (left, right, ip) => {
        if (ip.length === 4 && left !== s.length) {return}
        // 用 left < s.length 會出錯
        if (left === s.length && ip.length !== 4) {return}
        // 用 ip.length < 4 會出錯
        if (left === s.length && ip.length === 4) {
            list.push(ip.join('.'))
            return
        }

        for (let i = 0; i < 3; i++) {
            if (s[left] === '0' && i !== 0) {break}
            const num = Number(s.slice(left, right + i))
            if (num <= 255) {
                ip.push(num)
                buildIP(right + i, right + i + 1, ip)
                ip.pop()
            }
        }
    }

    buildIP(0, 1, [])
    return list
};

const s = "25525511135"

console.log(restoreIpAddresses(s))
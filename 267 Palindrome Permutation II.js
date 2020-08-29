/*
先分辨這個 string 有沒有可能組成 palindrome，如果超過一個字母出現奇數次，就不可能
接著只排列出現偶數次的字母，並且只排列一半，接著再將出現奇數次的字母加上去後 (若有)，再接上鏡射的那一半
*/

var generatePalindromes = function(s) {
    const chars = {}
    const list = []
    const used = new Set()

    s = s.split('').sort((a, b) => a.localeCompare(b))

    s.forEach(char => {
        if (char in chars) {chars[char]++}
        else {chars[char] = 1}
    })

    const keys = Object.keys(chars)
    let numOfOdd = 0
    let oddChar = ''

    keys.forEach(key => {
        if (chars[key] % 2 === 1) {
            numOfOdd++
            oddChar = key
        }
    })

    if (numOfOdd > 1) {return []}

    let halfS = ''
    // 以出現偶數次的字母，數量減半後，組成新的 string 排列

    keys.forEach(key => {
        if (key !== oddChar) {halfS += key.repeat(chars[key] / 2)}
        else {halfS += key.repeat((chars[key] - 1) / 2)}
        // 出現奇數次的字母可能不只出現一次
    })

    const findPermutations = (str, used) => {
        if (str.length === halfS.length) {
            // 接上奇數次字母與後面的鏡射另一半
            let secondHalf = str.split('').reverse().join('')
            list.push(str + oddChar + secondHalf)
            return
        }

        for (let i = 0; i < halfS.length; i++) {
            if (used.has(i)) {continue}
            if (i > 0 && used.has(i - 1) === false && halfS[i] === halfS[i - 1]) {continue}
            used.add(i)
            findPermutations(str + halfS[i], used)
            used.delete(i)
        }
    }

    findPermutations('', used)
    return list
}   

const s = 'aabb'

console.log(generatePalindromes(s))
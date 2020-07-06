var reverseStr = function(s, k) {
    let left = 0
    let right = left + 2 * k
    let reversed = ''

    while (right < s.length) {
        let str = ''
        for (let i = left; i < right; i++) {
            if (i - left === k) {
                str = str.split('').reverse().join('')
            }
            str += s[i]
        }
        reversed += str
        left = right
        right = left + 2 * k
    }

    if (left < s.length) {
        let str = ''
        if (s.length - left <= k) {
            str = s.slice(left).split('').reverse().join('')
        } else {
            for (let i = left; i < s.length; i++) {
                if (i - left === k) {
                    str = str.split('').reverse().join('')
                }
                str += s[i]
            }
        }
        reversed += str
    }
    return reversed
};

const s = "abcdefg"
const k = 2

console.log(reverseStr(s, k))
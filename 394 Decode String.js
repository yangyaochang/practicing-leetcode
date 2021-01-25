var decodeString = function(s) {
    const numStack = []
    const strStack = []
    const nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    let num = 0
    let result = ''

    for (let i = 0; i < s.length; i++) {
        // 是數字
        if (nums.has(s[i])) {
            num = num * 10 + Number(s[i])
        } else if (s[i] === '[') {
            strStack.push(result)
            result = ''
            numStack.push(num)
            num = 0
        } else if (s[i] === ']') {
            const repeatTimes = numStack.pop()
            result = strStack.pop() + result.repeat(repeatTimes)
        } else {
            result += s[i]
        }
    }

    return result
};
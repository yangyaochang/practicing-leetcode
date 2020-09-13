var myAtoi = function(str) {
    let index = 0
    let isNegative = false
    const nums = []

    while (str[index] === ' ') {
        index++
    }

    if (str[index] === '-') {
        isNegative = true
        index++
    } else if (str[index] === '+') {
        index++
    }
    
    while (str[index] === '0') {
        index++
    }

    while (index < str.length && /[0-9]/.test(str[index])) {
        nums.push(str[index])
        index++
    }

    if (nums.length > 0) {
        let value = (isNegative) ? -Number(nums.join('')) : Number(nums.join(''))
        
        if (value > Math.pow(2, 31) - 1) {return Math.pow(2, 31) - 1}
        if (value < -Math.pow(2, 31)) {return -Math.pow(2, 31)}
        return value
    } else {
        return 0
    }
};
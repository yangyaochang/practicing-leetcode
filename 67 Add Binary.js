var addBinary = function(a, b) {
    let convertToDigitArr = (arr) => {
        return arr.split('').map(digit => Number(digit))
    }

    let digit_a = convertToDigitArr(a)
    let digit_b = convertToDigitArr(b)
    let temp = 0
    let storeDigit = []
    
    while (digit_a.length > 0 || digit_b.length > 0) {
        let sum
        let get_a = (digit_a.length > 0) ? digit_a.pop() : 0
        let get_b = (digit_b.length > 0) ? digit_b.pop() : 0
        if (get_a + get_b + temp >= 2) {
            sum = get_a + get_b + temp - 2
            temp = 1
            
        } else {
            sum = get_a + get_b + temp
            temp = 0
        }
        storeDigit.push(sum)
        if (digit_a.length === 0 && digit_b.length === 0 && temp === 1) {
            storeDigit.push(temp)
        }
    }

    return storeDigit.reverse().join('')
};
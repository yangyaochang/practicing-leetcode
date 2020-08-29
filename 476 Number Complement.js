var findComplement = function(num) {
    const digits = []
    let complement = 0
    
    num = num.toString(2).split('')
    
    num.forEach(digit => {
        if (digit === '0') {
            digits.push(1)
        } else {
            digits.push(0)
        }
    })
    
    for (let i = 0; i < digits.length; i++) {
        complement += digits[i] * Math.pow(2, digits.length - 1 - i)
    }
    
    return complement
};

console.log(findComplement(2))
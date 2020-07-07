var titleToNumber = function(s) {
    s = s.split('')
    let length = s.length
    let sum = 0

    for (let i = 0; i < length; i++) {
        sum += charToValue(s.pop()) * Math.pow(26, i)
    } 
    
    return sum
    
    function charToValue(char) {
        return char.charCodeAt() - 'A'.charCodeAt() + 1
    }   
};

const s = 'AA'

console.log(titleToNumber(s))